import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import DrawerComponent from "../Drawer";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box h="16"></Box>
      <Flex
        h="16"
        bg="black"
        justifyContent="space-between"
        alignItems="center"
        px={2}
        position="fixed"
        top={0}
        w="100%"
      >
        <Flex alignItems="center">
          <IconButton
            aria-label="menu"
            icon={<HamburgerIcon />}
            variant="link"
            p={2}
            ref={btnRef}
            colorScheme="whiteAlpha"
            onClick={onOpen}
          />
          <Image
            src="/logo.png"
            boxSize="6"
            alt="Anushka's stash logo"
            ml={2}
          />
        </Flex>
        <Flex>
          <IconButton
            aria-label="menu"
            icon={<SearchIcon />}
            variant="link"
            p={2}
            ref={btnRef}
            colorScheme="whiteAlpha"
          />
        </Flex>
        <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      </Flex>
    </>
  );
};

export default Header;
