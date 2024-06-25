import { Box, Button, Card, Group, Image, Rating, Text } from "@mantine/core";
import React from "react";
import { CartState } from "../../context/Context";

export default function SingleProduct(props) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(cart);
  return (
    <Box className="mx-8 mt-4 md:mx-20 lg:mx-0">
      <Card shadow="sm" padding="lg" radius="md" size="sm" withBorder>
        <Card.Section>
          <Image
            className="border-slate-500 border-2 h-60 md:h-80 lg:h-60  object-cover"
            src={props.prod.image}
            alt="Norway"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text className="text-xl md:text-2xl" fw={500}>
            {props.prod.title}
          </Text>
          <Text className="text-md font-semibold md:text-lg">
            ${props.prod.price}
          </Text>
        </Group>

        <Text className="font-semibold font-serif md:text-lg" size="md">
          {props.prod.stockStatus ? "In Stock" : "Out of Stock"}
        </Text>
        <Text className="font-semibold font-mono md:text-lg">
          {props.prod.fastDelivery ? "Fast Delivery" : "4 Days Delivery"}
        </Text>
        <Rating className="mt-2" value={props.prod.rating} fractions={2} />
        {cart.some((p) => p.id === props.prod.id) ? (
          <Button
            color="red"
            fullWidth
            mt="md"
            radius="md"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: props.prod,
              })
            }
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            disabled={!props.prod.stockStatus}
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: props.prod })
            }
          >
            {!props.prod.stockStatus ? "Out of Stock" : "Add to Cart"}
          </Button>
        )}
      </Card>
    </Box>
  );
}
