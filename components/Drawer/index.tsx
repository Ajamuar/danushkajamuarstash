import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  VStack,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { RefObject } from "react";
import Link from "next/link";

type DrawerComponentProps = {
  isOpen: boolean;
  onClose: () => void;
  btnRef: RefObject<any>;
};

const DrawerRow = ({ text, url }: { text: string; url: string }) => {
  return (
    <Link href={url}>
      <Box w="100%" h={6} p={2} cursor="pointer">
        <HStack alignItems="flex-start" w="100%">
          <Text color="white" _hover={{ transform: "scale(1.2)" }}>
            {text}
          </Text>
        </HStack>
      </Box>
    </Link>
  );
};

const DrawerComponent = ({ isOpen, onClose, btnRef }: DrawerComponentProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent bg="black">
        <DrawerCloseButton color="white" mt={1.5} />
        <DrawerHeader color="white">Anushka's Stash</DrawerHeader>

        <DrawerBody>
          <VStack w="100%" mt={4}>
            <DrawerRow text="Home" url="/" />
          </VStack>
          <VStack w="100%" mt={4}>
            <DrawerRow text="Cart" url="/cart" />
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
