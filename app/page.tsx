"use client";

import * as React from "react";

import { products } from "@/static";
import AppShowcase from "@/components/AppShowcase";
import { Categories } from "@/components/Categories";
import MenClothing from "@/components/MenClothing";
import Hero from "@/components/Hero";
import TopDeals from "@/components/TopDeals";

import Favourite from "@/components/Favourite";
import TopSports from "@/components/TopSports";
import TopVendors from "@/components/TopVendors";

export default function Home() {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, []);

  return (
    <div className="">
      <Hero />
      <Categories />
      <MenClothing />
      <TopDeals />
      <AppShowcase />
      <Favourite />
      <TopSports />
      <TopVendors />
    </div>
  );
}
