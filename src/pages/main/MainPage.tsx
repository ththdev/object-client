import React from 'react'
import { Helmet } from 'react-helmet'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
    return (
        <div>
            <Helmet>
                <title>My Title</title>
            </Helmet>
            Main Page
            <Users />
        </div>
    )
}

const USERS = gql`
    {
        users {
            id
            name
        }
    }
`

const Users = () => {
    const { loading, error, data } = useQuery(USERS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return data.users.map(({ id, name }) => (
        <div key={id}>
            {name}
        </div>
    ))
}

export default MainPage