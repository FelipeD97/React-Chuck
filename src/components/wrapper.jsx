import React from "react";
import { Container, Box } from "bloomer";

const Wrapper = props => {
    return (
        <Container >
            <Box className="quote-box">
                {props.children}
            </Box>
        </Container>
    )
}

export default Wrapper;