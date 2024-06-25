import { Box, Text, TextInput } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";
import { FaCartPlus } from "react-icons/fa";
export default function Header() {
  const {
    state: { cart },
    filterDispatch,
  } = CartState();
  return (
    <>
      <Box className="h-[150px] md:h-[105px] lg:h-[60px] xl:h-[50px] bg-gray-200 lg:flex xs:flex-col lg:justify-between">
        <Box className="text-center md:flex md:justify-between lg:justify-start lg:w-7/12">
          <Text className="text-2xl text-blue-950 font-mono font-bold md:w-2.5/12 lg:w-5/12 lg:mt-1">
            <Link to="/">Online Mobile Store</Link>
          </Text>
          <TextInput
            placeholder="Enter product here"
            className="w-4/5 mx-8 mt-5 md:w-5/12 md:mt-1 lg:w-6/12"
            onChange={(e) => {
              filterDispatch({
                type: "SEARCH_FILTERS",
                payload: e.target.value,
              });
            }}
          />
        </Box>
        <Box className="flex justify-center mt-4 lg:w-4/12 lg:mt-1 lg:justify-end lg:mr-4">
          <FaCartPlus className="mt-1 size-6 md:size-8 lg:size-7" />
          <Box className="ml-3 mt-1 text-lg md:text-2xl lg:text-xl">
            <Link to="/cart">View Your Cart : {cart.length} Items</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
