import CONNECT_TO_DB from "@/lib/connectToDb";
import { isAuth } from "@/lib/isAuth";
import Sale from "@/models/sale";

CONNECT_TO_DB();

export const dynamic = "force-dynamic";

export const GET = async (req: Request) => {
    try {
        const isauth = await isAuth();
        if (!isauth) {
            return Response.json(
                { message: "Unauthorized" },
                {
                    status: 401,
                }
            );
        }
        const { searchParams } = new URL(req.url);

        let from: Date | undefined = !!searchParams.get("from")
            ? new Date(searchParams.get("from")!)
            : undefined;
        let to: Date | undefined = !!searchParams.get("to")
            ? new Date(searchParams?.get("to")!)
            : new Date();

        const sales = await Sale.aggregate([
            {
                $match: {
                    date: from
                        ? {
                              $lte: to,
                              $gte: from,
                          }
                        : {
                              $lte: to,
                          },
                },
            },
            {
                $lookup: {
                    from: "clients",
                    foreignField: "_id",
                    localField: "client",
                    as: "client",
                },
            },
            {
                $group: {
                    _id: {
                        district: "$client.district",
                        market: "$client.market",
                        product: "$name",
                    },

                    // Product stats
                    totalQtySold: {
                        $sum: "$qty",
                    },
                    avgPrice: {
                        $avg: "$rate",
                    },
                },
            },
            {
                // Block
                $group: {
                    _id: {
                        district: "$_id.district",
                        market: "$_id.market",
                    },
                    totalQtySold: {
                        $sum: "$totalQtySold",
                    },
                    totalProduct: {
                        $count: {},
                    },

                    productStats: {
                        $push: {
                            name: "$_id.product",
                            totalQtySold: "$totalQtySold",
                            avgPrice: "$avgPrice",
                        },
                    },
                },
            },
            {
                //  District
                $group: {
                    _id: "$_id.district",
                    district: {
                        $first: "$_id.district",
                    },
                    totalQtySold: {
                        $sum: "$totalQtySold",
                    },

                    markets: {
                        $push: {
                            name: {
                                $first: "$_id.market",
                            },
                            totalQtySold: "$totalQtySold",
                            // products: "$productStats",
                            products: {
                                $sortArray: {
                                    input: "$productStats",
                                    sortBy: {
                                        totalQtySold: -1,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            {
                $addFields: {
                    _id: {
                        $first: "$_id",
                    },
                    district: {
                        $first: "$district",
                    },

                    markets: {
                        $sortArray: {
                            input: "$markets",
                            sortBy: { totalQtySold: -1 },
                        },
                    },
                },
            },
        ]).sort({
            totalQtySold: -1,
        });

        return Response.json(sales);
    } catch (error) {
        console.log("Error in districtStatByProduct");
        return Response.json(error, { status: 500 });
    }
};
