"use client";
import { useAssests } from "@/hooks/use-fetch-data";
import { HomeCarousel } from "./home-carousel";
import { Loader2 } from "lucide-react";

export const HomeComponent = () => {
    const { data, isLoading } = useAssests();

    return (
        <div className="px-3">
            {isLoading ? (
                <div className="h-[80vh] flex items-center justify-center">
                    <Loader2 className="w-8 h-8 animate-spin" />
                </div>
            ) : (
                <>
                    <HomeCarousel data={data} />
                </>
            )}
        </div>
    );
};
