import { Box, Center, Grid } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import ProductTile from "../ProjectTile";

const ProductCatalog = () => {
  const width = useBreakpointValue({ base: "100%", md: "50%", lg: "23%" });

  return (
    <Box h="100%">
      <Box mx={[1, 8]} mt={4}>
        <Grid
          gap={4}
          gridTemplateColumns={`repeat(auto-fit, ${width})`}
          justifyContent="center"
        >
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductCatalog;
