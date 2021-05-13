import { Image } from "@chakra-ui/react";
import { Heading, HStack, Text, VStack } from "@chakra-ui/layout";

const ProductTile = () => {
  return (
    <VStack w="100%" bg="white" boxShadow="base">
      <Image
        src="/segun_adebayo.jpg"
        alt="Picture of the product"
        h="72"
        width="100%"
      />
      <HStack w="100%" px={2} py={1} justifyContent="space-between">
        <Heading size="md">Product Title</Heading>
        <Text fontWeight="bold">200 /-</Text>
      </HStack>
      <Text size="sm" px={2} py={1}>
        This is where we will be writing about the product. The customers will
        get a sneak peak about the job.
      </Text>
      <Text></Text>
    </VStack>
  );
};

export default ProductTile;
