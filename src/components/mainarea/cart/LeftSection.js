import {
  Box,
  Button,
  Grid,
  Image,
  List,
  Rating,
  Select,
  Text,
} from "@mantine/core";
import React from "react";
import { CartState } from "../../../context/Context";

export default function LeftSection() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      <Box className="bg-slate-400 h-full lg:w-9/12">
        {cart.map((e) => {
          return (
            <>
              <Box className=" mx-5 mt-4 bg-slate-200 border-black border-2 h-max ">
                <Grid>
                  <Grid.Col span={{ base: 6, sm: 3 }}>
                    <Image className="h-20 " src={e.image} />
                  </Grid.Col>
                  <Grid.Col
                    offset={{ base: 1, sm: 0 }}
                    span={{ base: 3, sm: 4 }}
                  >
                    <Box className="flex-col mt-2">
                      <Text className="text-xl font-semibold">{e.title}</Text>
                      <Text className="text-lg text-blue-950 font-semibold">
                        ${e.price}
                      </Text>
                    </Box>
                  </Grid.Col>
                  <Grid.Col
                    offset={{ base: 2, sm: 1 }}
                    span={{ base: 4, sm: 2 }}
                  >
                    <Select
                      className="w-24 mt-5"
                      data={["1", "2", "3", "4"]}
                      defaultValue="1"
                      placeholder="1"
                      onChange={(x) =>
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: { id: e.id, qty: x },
                        })
                      }
                    />
                  </Grid.Col>
                  <Grid.Col
                    offset={{ base: 2, sm: 0 }}
                    span={{ base: 4, sm: 2 }}
                  >
                    <Button
                      className="mt-5"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: e,
                        });
                      }}
                    >
                      Delete
                    </Button>
                  </Grid.Col>
                </Grid>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
}
