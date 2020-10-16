import React from "react";

import Price1 from "../img/price1.jpg";
import Price2 from "../img/price2.jpg";
import Price3 from "../img/price3.jpg";
import Price4 from "../img/price4.jpg";
import Price5 from "../img/price5.jpg";
import Price6 from "../img/price6.jpg";
import Price7 from "../img/price7.jpg";

export default function Glasses() {
  const items = [
    {
      title: "Monarch",
      image: Price1,
      price: "300$",
      rate: 4,
      prevprice: "500$",
    },
    {
      title: "Saker",
      image: Price2,
      price: "300$",
      rate: 4,
      prevprice: "500$",
    },
    { title: "WES", image: Price3, price: "300$", rate: 4, prevprice: "500$" },
    {
      title: "Stockholm",
      image: Price4,
      price: "300$",
      rate: 4,
      prevprice: "500$",
    },
    { title: "Mel", image: Price5, price: "300$", rate: 4, prevprice: "0" },
    {
      title: "Jackson",
      image: Price6,
      price: "300$",
      rate: 4,
      prevprice: "500$",
    },
    {
      title: "Madness",
      image: Price7,
      price: "300$",
      rate: 4,
      prevprice: "500$",
    },
  ];
  return items;
}
