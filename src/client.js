import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  credentials: "include",
  cache: new InMemoryCache(),
});

export default client;
