import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o3p6dr0eu101z7gadfczs7/master',
  cache: new InMemoryCache(),
})
