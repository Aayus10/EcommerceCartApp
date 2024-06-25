import { Box } from "@mantine/core";
import React from "react";
import Filters from "./Filters";
import Home from "./Home";

export default function Main() {
  return (
    <>
      <Box className="xs:flex-col mt-5 lg:flex h-max">
        <Filters />
        <Home />
      </Box>
    </>
  );
}
