import { Box, Button, Checkbox, Radio, Rating, Text } from "@mantine/core";
import React from "react";
import { CartState } from "../../context/Context";

export default function Filters() {
  const {
    filterState: { bystock, byFastdelivery, byRating, sort },
    filterDispatch,
    dispatch,
    originaldata,
  } = CartState();
  const handlereset = () => {
    filterDispatch({ type: "CLEAR_FILTERS" });
    dispatch({ type: "RESET_FILTERS", payload: originaldata });
  };
  return (
    <>
      <Box className="lg:min-h-screen py-3 lg:w-1/5 bg-slate-900 text-white flex flex-col gap-y-4 lg:gap-y-6 items-center">
        <Box className=" text-2xl font-mono xl:text-3xl">APPLY FILTERS</Box>

        <Box className="flex flex-col gap-y-3 lg:gap-y-6 font-3xl md:flex">
          <Radio
            value="ascending"
            label="Price: Low to High"
            color="indigo"
            onChange={() => {
              filterDispatch({ type: "SORT_BY_PRICE", payload: "ascend" });
            }}
            checked={sort === "ascend"}
          />
          <Radio
            value="descending"
            label="Price: High to Low"
            color="indigo"
            onChange={() => {
              filterDispatch({ type: "SORT_BY_PRICE", payload: "descend" });
            }}
            checked={sort === "descend"}
          />
          <Checkbox
            label="Include Out of Stock"
            color="gray"
            size="sm"
            checked={bystock}
            onChange={() => {
              filterDispatch({ type: "FILTER_BY_STOCK" });
            }}
          />
          <Checkbox
            label="Fast Delivery"
            color="gray"
            size="sm"
            checked={byFastdelivery}
            onChange={() => {
              filterDispatch({ type: "FILTER_BY_DELIVERY" });
            }}
          />
          <Box className="flex">
            <Text>Minimum Rating:</Text>
            <Rating
              className="mt-1 ml-3"
              value={byRating}
              onChange={(i) => {
                filterDispatch({
                  type: "FILTER_BY_RATING",
                  payload: i,
                });
              }}
              fractions={2}
            />
          </Box>
          <Button className="w-max" size="sm" onClick={handlereset}>
            Clear Filters
          </Button>
        </Box>
      </Box>
    </>
  );
}
