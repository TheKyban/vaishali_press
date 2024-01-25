import {
    ClientTypeExtented,
    ProductTypeExtended,
    SalesTypeExtended,
} from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useClient = () => {
    return useQuery<ClientTypeExtented[]>({
        queryKey: ["clients-list"],
        queryFn: async () => {
            const { data } = await axios.get("/api/client");
            return data?.clients;
        },
    });
};

export const useProduct = () => {
    return useQuery<ProductTypeExtended[]>({
        queryKey: ["products-list"],
        queryFn: async () => {
            const { data } = await axios.get("/api/product");
            return data?.products;
        },
    });
};

export const useSale = () => {
    return useQuery<SalesTypeExtended[]>({
        queryKey: ["sales-list"],
        queryFn: async () => {
            const { data } = await axios.get("/api/sale");
            return data?.sales;
        },
    });
};