import { Box, Button, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { CartState } from "../../../context/Context";

export default function RightSection() {
  const {
    state: { cart },
  } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, cur) => acc + Number(cur.price) * Number(cur.qty), 0)
    );
  }, [cart]);
  return (
    <>
      <Box className="py-4 lg:w-3/12 bg-slate-600 mt-4 text-white lg:mt-0">
        <Text className="text-center text-2xl font-bold lg:text-3xl">
          Total Items: {cart.length}
        </Text>
        <Text className="text-center text-xl font-bold mt-3 lg:text-2xl">
          Amount: $ {total}
        </Text>
        <Button
          className="mt-5 mx-[30%] w-[40%] md:w-[25%] md:mx-[37.5%] lg:w-[70%] lg:mx-[15%]"
          variant="filled"
          color="teal"
          size="sm"
        >
          Proceed to checkout
        </Button>
      </Box>
    </>
  );
}
