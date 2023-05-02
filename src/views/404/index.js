import { useContext } from "react";
import PokemonContext from "../../context/pokemons";

export default function FourOFour(){
    const {pokemons} =useContext(PokemonContext);
    return (
        <div>
            <p>Perdona, no encontré lo que estabas buscando</p>
        </div>
    );
}