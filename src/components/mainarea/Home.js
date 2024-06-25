import { Box, Grid } from "@mantine/core";
import React from "react";
import { CartState } from "../../context/Context";
import SingleProduct from "./SingleProduct";

export default function Home() {
  const {
    state: { data },
    filterState: { bystock, byFastdelivery, byRating, searchquery, sort },
  } = CartState();
  let products = data[0];

  const transformproduct = () => {
    let sortedproducts = products;

    if (sort) {
      sortedproducts.sort((a, b) => {
        if (sort === "ascend") {
          return a.price - b.price; // Sort in ascending order
        } else if (sort === "descend") {
          return b.price - a.price; // Sort in descending order
        } else {
          return 0;
        }
      });
    }

    if (!bystock) {
      sortedproducts = sortedproducts.filter((x) => x.stockStatus);
    }

    if (byFastdelivery) {
      sortedproducts = sortedproducts.filter((x) => x.fastDelivery);
    }

    if (byRating) {
      sortedproducts = sortedproducts.filter((x) => x.rating >= byRating);
    }
    if (searchquery) {
      sortedproducts = sortedproducts.filter((x) =>
        x.title.toLowerCase().includes(searchquery.toLowerCase())
      );
    }

    return sortedproducts;
  };

  return (
    <Box className="bg-slate-500 mt-4  lg:w-4/5 lg:mt-0 px-4 pb-4">
      <Grid className="">
        {transformproduct().map((prod) => {
          return (
            <Grid.Col span={{ base: 12, md: 4 }}>
              <SingleProduct prod={prod} key={prod.id} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
}
