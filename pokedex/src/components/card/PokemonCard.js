import React, { useEffect, useContext, useState } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import pokeball from "../../img/pokeball.svg"
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { getTypes } from '../../utils/ReturnType'
import {PokemonCardConteiner} from "./StyledPokemonCard"
import {getColors} from "../../utils/ReturnCor"




const PokemonCard = (props, {showLink = true}) => {
    const { pokemon} = props;

    const context = useContext(GlobalContext)
    
    const [poder, setPoder] = useState([])
    const [poder2, setPoder2] = useState([])
    const [pokeDetalhes, setPokeDetalhes] = useState([])   

    const { addToPokedex, removeFromPokedex, modalCapturarAparecer} = context   
      
   
    const fetchPokemon2 = async () => {
        setPoder2(pokemon['types']['0']['type']['name'])
        setPoder(pokemon.types[1]?.type?.name)         
    }
    const pokemonNameFetch = async () => {
        setPokeDetalhes(pokemon)
    }

    useEffect(()=>{
        fetchPokemon2()
     },[])

     useEffect(()=>{
        pokemonNameFetch()
     },[fetchPokemon2])

      function capturarModal(){
        modalCapturarAparecer()
        addToPokedex(pokemon)
      }
      function excluirModal(){
        modalCapturarAparecer()
        removeFromPokedex(pokemon)
      }
  
    return (
        <PokemonCardConteiner color = {getColors(poder2)} >

            <div className='ladoDireito'>
                <img className='imgBulba' src={pokemon.sprites?.other["official-artwork"].front_default} />
                <img className='bolaPokeCard' src={pokeball} />
              
                {props.isHomePage && <button className='botaoCapturar' onClick={() => capturarModal()}>Capturar</button>}
                {props.isPokedex && <button className='botaoExcluir' onClick={() => excluirModal()}>Excluir</button> }
            </div>

            <div className='ladoEsquerdo'>
                <p>#{pokemon.id}</p>
                <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <div className='tipos'>                    
                    {poder2 && <img className='tipo2' src={getTypes(poder2)} />}
                    {poder && <img className='tipo1' src={getTypes(poder)} />}                    
                </div>
                <h3>{showLink && <Link to={`/detalhes/${pokeDetalhes.name}`}>Detalhes</Link>}</h3>
                
            </div>

        </PokemonCardConteiner>

    )
}

export default PokemonCard