import { useNavigate } from "react-router-dom";
import { Container, Box, Text, TabList, Tab, TabPanels, TabPanel, Tabs } from "@chakra-ui/react";
import { useEffect } from "react";
import Login from "../component/Authentication/Login";
import SignUp from "../component/Authentication/SignUp";


const HomePage=()=>{
    const navigate=useNavigate()
    useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

        if (user){
            navigate("/chats");
        }
    }, [navigate]);
    return <Container maxW='xl'>
        <Box d='flex' justifyContent={'center'} p={3} bg='white'
            w='100%' m='40px 0 15px 0' borderRadius='lg' borderWidth='1px'
        >
            <Text fontSize='4xl' fontFamily='work sans' textAlign={"center"}>Chat App</Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

    </Container>
}

export default HomePage;