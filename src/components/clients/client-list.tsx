"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Download, Pen, Trash, Users } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";
import { LoadingCells } from "@/components/loading";
import { format } from "date-fns";
import { useClient } from "@/hooks/use-fetch-data";
import { ClientTypeExtented } from "@/lib/types";
import {
    ChangeEvent,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { downloadToPDF } from "@/lib/utils";

export default function ClientList() {
    const { onOpen } = useModal();
    const { data: clientsData, isLoading } = useClient();
    const [sort, setSort] = useState<"atoz" | "latest" | "district">("atoz");
    const [data, setData] = useState<ClientTypeExtented[] | undefined>([]);
    const [search, setSearch] = useState("");
    let timerRef = useRef<NodeJS.Timeout | null>(null);

    const sortedClientByAtoZ = useMemo(() => {
        if (!clientsData) return;

        const sorted = [...clientsData]?.sort(function (a, b) {
            return (
                a.name.localeCompare(b.name) ||
                a.district.charAt(0).localeCompare(b.district.charAt(0)) ||
                a.market.charAt(0).localeCompare(b.market.charAt(0))
            );
        });

        return sorted;
    }, [clientsData]);

    const sortedClientByDate = useMemo(() => {
        if (!clientsData) return;
        const sorted = [...clientsData]?.sort(function (a, b) {
            return a.createdAt < b.createdAt ? 1 : -1;
        });

        return sorted;
    }, [clientsData]);

    const sortByDistrictAtoZ = useMemo(() => {
        if (!clientsData) return;

        const sorted = [...clientsData]?.sort(function (a, b) {
            return (
                a.district.localeCompare(b.district) ||
                a.market.charAt(0).localeCompare(b.market.charAt(0)) ||
                a.name.charAt(0).localeCompare(b.name.charAt(0))
            );
        });

        return sorted;
    }, [clientsData]);

    useEffect(() => {
        setData(sortedClientByAtoZ);
    }, [clientsData, sortedClientByAtoZ]);

    const searchClientByName = useCallback(
        (name: string) => {
            if (!clientsData) return;
            const searchedClient = [...clientsData].filter((client) => {
                if (sort === "district") {
                    return client?.district.startsWith(
                        name?.toLocaleLowerCase()
                    );
                } else {
                    return client?.name.startsWith(name?.toLowerCase());
                }
            });

            if (name === "") {
                if (sort === "atoz") {
                    setData(sortedClientByAtoZ);
                } else if (sort === "latest") {
                    setData(sortedClientByDate);
                } else if (sort === "district") {
                    setData(sortByDistrictAtoZ);
                }
                return;
            }

            if (sort === "district") {
                console.log("district");
                const sorted = [...searchedClient]?.sort(function (a, b) {
                    return (
                        a.district.localeCompare(b.district) ||
                        a.market.charAt(0).localeCompare(b.market.charAt(0)) ||
                        a.name.charAt(0).localeCompare(b.name.charAt(0))
                    );
                });
                setData(sorted);
            } else {
                setData(searchedClient);
            }
        },
        [
            clientsData,
            sort,
            sortByDistrictAtoZ,
            sortedClientByAtoZ,
            sortedClientByDate,
        ]
    );

    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            searchClientByName(e.target.value);
        }, 300);
    };

    return (
        <div className="border max-w-7xl w-full rounded-md py-3 shadow-md">
            <div className="flex items-center justify-between gap-3 mb-3 px-3">
                <div className="flex items-center gap-3">
                    <Users className="text-indigo-500 w-6 h-6" />
                    <h1 className="uppercase text-indigo-600 font-bold text-lg">
                        Clients
                    </h1>

                    <span className="uppercase text-indigo-600 font-bold text-lg">
                        {data?.length}
                    </span>
                </div>
                <div className="flex gap-3">
                    <Input
                        placeholder={
                            sort === "atoz" || sort === "latest"
                                ? "Search Client"
                                : "Search District"
                        }
                        value={search}
                        onChange={(e) => searchHandler(e)}
                    />

                    <Select
                        value={sort}
                        onValueChange={(e: "atoz" | "latest" | "district") => {
                            setSort(e);

                            if (e === "latest") {
                                setData(sortedClientByDate);
                            } else if (e === "atoz") {
                                setData(sortedClientByAtoZ);
                            } else if (e === "district") {
                                setData(sortByDistrictAtoZ);
                            }
                        }}
                        defaultValue={sort}
                    >
                        <SelectTrigger className="max-w-24">
                            <SelectValue placeholder={"Filter"} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Filter</SelectLabel>

                                <SelectItem value={"latest"}>Latest</SelectItem>
                                <SelectItem value={"atoz"}>A-Z</SelectItem>
                                <SelectItem value={"district"}>
                                    District
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Button
                        variant={"ghost"}
                        size={"sm"}
                        onClick={() =>
                            downloadToPDF(isLoading, "#clients", `clients.pdf`)
                        }
                    >
                        <Download className="w-5 h-5" />
                    </Button>
                </div>
            </div>
            <div>
                <Table id="clients">
                    <TableHeader>
                        <TableRow>
                            <TableHead>S.No</TableHead>
                            <TableHead className="w-[150px] uppercase">
                                Name
                            </TableHead>
                            <TableHead className="uppercase">Market</TableHead>
                            <TableHead className="uppercase">
                                District
                            </TableHead>
                            <TableHead className="uppercase min-w-[120px]">
                                Month
                            </TableHead>
                            <TableHead className="uppercase min-w-[120px]">
                                Date
                            </TableHead>
                            <TableHead className="uppercase min-w-[120px]">
                                Mobile
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading && <LoadingCells cols={7} />}
                        {data?.map((client, idx) => (
                            <TableRow
                                key={client?._id}
                                onClick={() => {
                                    onOpen("editClient", { client });
                                }}
                                className="cursor-pointer"
                            >
                                <TableCell>{idx + 1}</TableCell>
                                <TableCell className="font-medium capitalize">
                                    {client?.name
                                        ?.split(" ")
                                        ?.map((word) => {
                                            return (
                                                word[0].toUpperCase() +
                                                word.substring(1)
                                            );
                                        })
                                        .join(" ")}
                                </TableCell>
                                <TableCell className="capitalize">
                                    {client?.market
                                        ? client?.market
                                              ?.charAt(0)
                                              ?.toUpperCase() +
                                          client?.market?.substring(1)
                                        : "NA"}
                                </TableCell>

                                <TableCell className="capitalize">
                                    {client?.district
                                        ?.charAt(0)
                                        ?.toUpperCase() +
                                        client?.district?.substring(1)}
                                </TableCell>
                                <TableCell>
                                    {format(
                                        new Date(client?.createdAt),
                                        "MMMM"
                                    )}
                                </TableCell>
                                <TableCell>
                                    {format(
                                        new Date(client?.createdAt),
                                        "dd-MM-yyyy"
                                    )}
                                </TableCell>

                                <TableCell>{client?.mobile}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
