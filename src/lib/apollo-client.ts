import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND_URL,
  cache: new InMemoryCache(),
});

export { ApolloProvider, apolloClient };
