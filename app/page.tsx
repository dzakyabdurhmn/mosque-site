import React from "react";
import Navbar from "@/components/navbar";
import Hero from "./hero";
import Card from "./card";
import All from "./menu";
import Accordion from "./accordion";
import Footer from "./footer";
import Coment from "./counterNumber";

const page = () => {
  return (
    <>
      {/* <Navbar />
      <Hero />
      <Card />
      <All /> */}
      <Accordion />
      {/* <Coment /> */}
    </>
  );
};

export default page;
