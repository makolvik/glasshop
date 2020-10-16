import React, { useState } from "react";

export const ContextApp = React.createContext();

export const initialState = {
  cart: [],
  total: 0,
  order: [],
  itemState: [
    {
      title: "FIRE MIRROR COLORBOOST  POLARIZED SMOKE LENS",
      price: 450,
      art: 125,
      prevprice: 500,
      comments: [
        {
          date: "22/10 /2020",
          author: "Dan Balan0",
          title: "Rocks",
          rating: 4,
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22/10 /2020",
          author: "Dan Balan0",
          title: "Rocks",
          rating: 4,
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22/10 /2020",
          author: "Dan Baswerwerwerlan0",
          title: "Rocks",
          rating: 4,
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22/10 /2020",
          author: "Dan Bawrwerwerlan0",
          title: "Rocks",
          rating: 4,
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22/10 /2020",
          author: "Dan Balan0",
          title: "Rocks",
          rating: 4,
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22/10 /2020",
          author: "Dan Balan0",
          title: "Rocks",
          rating: 4,
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22/10 /2020",
          author: "Dan Balan0",
          title: "Rocks",
          rating: 4,
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22/10 /2020",
          author: "Dan Bawerwerlan0",
          title: "Rocks",
          rating: 4,
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22/10 /2020",
          author: "Dan Balan0",
          title: "Rocks",
          rating: 4,
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22/10 /2020",
          author: "Dan Balan0",
          title: "Rocks",
          rating: 4,
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22/10 /2020",
          author: "Dan Bafggfhfghlan0",
          title: "Rocks",
          rating: 4,
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22/10 /2020",
          author: "Dan Balan0",
          title: "Rocks",
          rating: 4,
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22/10 /2020",
          author: "Dan Bafghfghlan0",
          title: "Rocks",
          rating: 4,
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22/10 /2020",
          author: "Dan Balan0",
          title: "Rocks",
          rating: 4,
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22/10 /2020",
          author: "Dan Balan0",
          title: "Rocks",
          rating: 4,
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22/10 /2020",
          author: "Dan Baghjghkghjkslan0",
          title: "Rocks",
          rating: 2,
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
      ],
      id: 21322,
      itemrating: {
        total: 43,
        rating: 4,
      },
    },
  ],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "add_item":
      const newitem = {
        ...action.payload,
        quant: 1,
        total: action.payload.price,
      };

      const currart = newitem.art;
      console.log(currart);
      const index = state.cart.findIndex((x) => x.art === currart);
      if (index < 0) {
        return {
          ...state,
          cart: [...state.cart, newitem],
          total: state.total + newitem.price,
        };
      } else {
        state.cart[index].quant = state.cart[index].quant + 1;
        state.cart[index].total =
          state.cart[index].total + state.cart[index].price;
        state.total = state.total + state.cart[index].price;
        return {
          ...state,
        };
      }

    case "add_quant_test":
      const idadd = Number(action.payload);
      const indexItemAdd = state.cart.findIndex((item) => item.id === idadd);
      state.cart[indexItemAdd].quant = state.cart[indexItemAdd].quant + 1;
      state.cart[indexItemAdd].total =
        state.cart[indexItemAdd].total + state.cart[indexItemAdd].price;
      state.total = state.total + state.cart[indexItemAdd].price;
      console.log(state, "addquant");

      return {
        ...state,
      };

    case "minus_quant_test":
      const idminus = Number(action.payload);
      const indexItem = state.cart.findIndex((item) => item.id === idminus);
      console.log(indexItem);
      state.cart[indexItem].quant = state.cart[indexItem].quant - 1;
      state.cart[indexItem].total =
        state.cart[indexItem].total - state.cart[indexItem].price;
      state.total = state.total - state.cart[indexItem].price;
      if (state.cart[indexItem].quant <= 0) {
        state.cart = state.cart.filter((item) => item.id !== idminus);

        return { ...state };
      } else {
        console.log("bigger");
        return {
          ...state,
        };
      }

    case "send_order":
      const neworder = {
        num: 1223,
        customer: "oleg",
        items: state.cart,
        total: state.total,
      };

      return {
        ...state,
        cart: [],
        total: 0,
        order: [...state.order, neworder],
      };
    case "add_comments":
      console.log("ssdd", action.payload);
      return {
        ...state,
        itemState: [
          {
            ...state.itemState[0],
            comments: [...state.itemState[0].comments, action.payload],
          },
        ],
      };

    default:
      return state;
  }
};
