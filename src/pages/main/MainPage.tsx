import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Collections from '../../components/collection/Collections'

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
    return (
        <Box>
            <Helmet>
                <title>My Title</title>
            </Helmet>
            <Container>
                <Collections />
            </Container>
        </Box>
    )
}

const Box = styled.div``

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default MainPage