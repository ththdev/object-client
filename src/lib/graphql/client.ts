import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'

const cache = new InMemoryCache()

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    fetchOptions: {
        credentials: 'include'
    },
    onError: ({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          console.log(graphQLErrors)
        }
        if (networkError) {
          console.log(networkError)
        }
    },
    cache
});

export default client