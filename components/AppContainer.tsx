import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AppContainerProps } from "@/interface";



const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <section>
      <Navbar />
      <div className="pb-10 bg-gradient-to-r from-purple-100 to-pink-100">
        {children}
      </div>
      <Footer />
    </section>
  );
};

export default AppContainer;
