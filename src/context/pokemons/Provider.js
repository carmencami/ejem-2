import { children, useState } from "react";
import PokemonContext from "./index";

import apiCall from "../../api";

export default function PokemonProvider({ children }){
    const [pokemons, setPokemons]=useState([]);
    const [pokemonDetail, setPokemonDetail]=useState({});
    const [isLoading, setIsLoading]=useState(false);


    const getPokemons = async ()=>{
        try{
            setIsLoading(true);
            const pokemonsResult = await apiCall({url : "https://pokeapi.co/api/v2/pokemon?limit=100"});
            setPokemons(pokemonsResult);
    }    catch(error){
        setPokemons([]);
    };
};

const getPokemonDetail = async (id) =>{
    if (!id) Promise.reject("Id es requerido");
    try{
        setIsLoading(true);
        const pokemonsDetail = await apiCall({url : `https://pokeapi.co/api/v2/${id}`});
        setPokemonDetail(pokemonDetail);
    } catch (error){
    setPokemonDetail({});
}
};
    return(
        <PokemonContext.Provider value={{ getPokemons,
        pokemons,
        getPokemonDetail,
        isLoading,
    }}>
            {children}
        </PokemonContext.Provider>
    );
    }
