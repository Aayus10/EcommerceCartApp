import { Box } from "@mantine/core";
import React from "react";

export default function NoItems() {
  return (
    <>
      <Box className="lg:w-9/12 text-3xl text-center bg-slate-200 pt-10">
        There are currently no items in the cart. Please shop your desired
        items.
      </Box>
    </>
  );
}
