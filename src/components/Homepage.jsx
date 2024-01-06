import Jumbotron from "./Jumbotron";
import PokemonList from './Datalist/PokemonList';

const Homepage = () => {
  return (
    <>
      <Jumbotron message="Welcome to Pokemon !" />
      <PokemonList />
    </>
  );
};

export default Homepage;