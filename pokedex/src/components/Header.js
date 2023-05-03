import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPokedex, ButtonTodosPokemonsDetalhes, ButtonExcluir, HeaderStyled } from "./header.styled"
import { goToHomePage, goToPokedexPage } from "../routes/coordinators"
import imgPokemonHeader from "../img/logoPokemon.svg"
import { GlobalContext } from "../contexts/GlobalContext";
import { useContext } from "react";

const Header = (props) => {

  const navigate = useNavigate()

  const irParaPokedex = () => {
    goToPokedexPage(navigate)
  }

  const homePage = () => {
    goToHomePage(navigate)
  }
  
  const { isHomePage, isDetalhes, isPokedex, details } = props
  const context = useContext(GlobalContext)
  const { pokedex, setPokedex, modalCapturarAparecer } = context

  return (
    <HeaderStyled>
      <div className="GridHeader1">
      <div>{isPokedex && <ButtonTodosPokemonsDetalhes onClick={homePage}>Todos os Pokemons</ButtonTodosPokemonsDetalhes>}</div>
      </div>
      <div className="GridHeader2"> <img className='imgPokemonHeader' src={imgPokemonHeader} /></div>
      <div className="GridHeader3">
        {isHomePage && <ButtonPokedex onClick={irParaPokedex}>Pokedéx</ButtonPokedex>}
        {isDetalhes && <ButtonExcluir onClick={() => {
          const removerDoDetalhes = pokedex.filter((poke) =>
            poke.name !== details.name
          )
          setPokedex(removerDoDetalhes)
          modalCapturarAparecer()
          const pokedexString = JSON.stringify(removerDoDetalhes)
          window.localStorage.setItem("pokeBrowser", pokedexString)
        }}>Excluir da Pokédex</ButtonExcluir>}
      </div>

    </HeaderStyled>
  )
}
export default Header