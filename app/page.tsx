"use client";

import * as React from "react";

import { products } from "@/static";
import AppShowcase from "@/components/AppShowcase";
import { Categories } from "@/components/Categories";
import MenClothing from "@/components/MenClothing";
import { Hero } from "@/components/Hero";
import TopDeals from "@/components/TopDeals";

import Favourite from "@/components/Favourite";
import TopSports from "@/components/TopSports";
import TopVendors from "@/components/TopVendors";
import SEO from "@/components/Seo";

export default function Home() {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, []);

  return (
    <>
      <SEO
        title="Home Page - My App"
        description="This is the home page of my app."
        keywords="home, my app, react, next.js"
      />
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
    </>
  );
}
