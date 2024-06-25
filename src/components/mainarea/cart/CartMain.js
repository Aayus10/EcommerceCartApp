import { Box } from "@mantine/core";
import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { CartState } from "../../../context/Context";
import NoItems from "./NoItems";

export default function CartMain() {
  const {
    state: { cart },
  } = CartState();
  return (
    <>
      <Box className="mt-4 lg:flex lg:h-screen">
        {cart.length === 0 ? <NoItems /> : <LeftSection />}

        <RightSection />
      </Box>
    </>
  );
}
