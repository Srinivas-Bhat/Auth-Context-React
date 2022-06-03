import React, { useContext } from "react";
import { Box, Button, Flex, Spacer, WrapItem } from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext.jsx";
import Input from "./Input.jsx";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <Flex
      w={"80%"}
      h={"60px"}
      bg={"gray.600"}
      color={"white"}
      m={"auto"}
      p={"5px 25px 5px 25px"}
      justify={"center"}
      align={"center"}
      rounded={"20px"}
      mt={"10px"}
    >
      <Box fontSize={"22px"} fontWeight={"bold"}>
        Snapdeal
      </Box>
      <Spacer />
      <Box fontSize={"17px"} fontWeight={"bold"}>
        <WrapItem>
          <Button
            onClick={() => setIsAuth(!isAuth)}
            bg={'gray.100'}
            rounded={"15px"}
            color={"black"}
          >
            {isAuth ? "Log-In" : "LogOut"}
          </Button>
        </WrapItem>
      </Box>
    </Flex>
  );
};

export default Navbar;
