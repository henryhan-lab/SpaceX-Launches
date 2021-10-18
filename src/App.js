import logo from './logo.svg';
import './App.css';
import { ApolloClient,InMemoryCache,HttpLink,onError,ApolloLink,ApolloProvider } from '@apollo/client';
import Launches from './launches';
import { setContext } from "@apollo/client/link/context";


const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache()
});




function App() {
  return (
    <ApolloProvider client={client}>  
      <Launches/>     
  </ApolloProvider>


  );
}

export default App;
