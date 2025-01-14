import React from 'react'
import ThreadHeader from "./subs/ThreadHeader"
import MessageForm from "./subs/MessageForm"
import ThreadReplies from "./subs/ThreadReplies"
import { Container } from "@chakra-ui/react"

function Index() {
    return(
      <Container maxW="370px"> 
        <ThreadHeader />
        <ThreadReplies />
        <MessageForm />
      </Container>
    )
}
export default Index
