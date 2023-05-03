import React from 'react'
import { getTypes } from '../../utils/ReturnType'
import { getColors } from "../../utils/ReturnCor"
import { ContainerCard, DetalhesLadoEsquerdo, DetalhesLadoDireito } from "../estilosPage/StyledDetalhesPage"
import pokeball from "../../img/pokeball.svg"


export const DetalhesCard = (props) => {
  const { details, poder, poder2, base } = props
  return (

    <ContainerCard color={getColors(poder2)}>
      <DetalhesLadoEsquerdo>

        <div className='divImgFrenteVerso'>
          <div className='divImgFrente'>
            <img className='imgCostaFrente' src={details.sprites?.front_default} />
          </div>

          <div className='divImgCosta'>
            <img className='imgCostaFrente' src={details.sprites?.back_default} />
          </div>
        </div>
        <div className='baseState'>
          <div className='base'>
            <h1>Base Stats</h1>
            <div marginTop={"-17px"} spacing={"-5px"} paddingLeft={"110px"}>
              < div className='bordaBase'><p className='progressBase'>HP<span className='spanBase1'>{base.length > 1 && base["0"]["base_stat"]}</span></p>
                <div borderRadius="10px" colorScheme='orange' size='md' value={base.length > 1 && base["0"]['base_stat']} /></div>
              <p className='progressBase'>Attack<span className='spanBase2'>{base.length > 1 && base["1"]["base_stat"]}</span></p>
              <div borderRadius="10px" colorScheme='orange' size='md' value={base.length > 1 && base["1"]['base_stat']} />
              <p className='progressBase'>Defense<span className='spanBase3'>{base.length > 1 && base["2"]["base_stat"]}</span></p>
              <div borderRadius="10px" colorScheme='orange' size='md' value={base.length > 1 && base["2"]['base_stat']} />
              <p className='progressBase'>Sp. Atk<span className='spanBase4'>{base.length > 1 && base["3"]["base_stat"]}</span></p>
              <div borderRadius="10px" colorScheme='yellow' size='md' value={base.length > 1 && base["3"]['base_stat']} />
              <p className='progressBase'>Sp. Def<span className='spanBase5'>{base.length > 1 && base["4"]["base_stat"]}</span></p>
              <div borderRadius="10px" colorScheme='yellow' size='md' value={base.length > 1 && base["4"]['base_stat']} />
              <p className='progressBase'>Speed<span className='spanBase6'>{base.length > 1 && base["5"]["base_stat"]}</span></p>
              <div borderRadius="10px" colorScheme='orange' size='md' value={base.length > 1 && base["5"]['base_stat']} />
              <div className='divBaseStatTotal'>
                <span>Total:</span><span className='spanTotal'>{base.length > 1 &&
                  base["0"]['base_stat'] +
                  base["1"]['base_stat'] +
                  base["2"]['base_stat'] +
                  base["3"]['base_stat'] +
                  base["4"]['base_stat'] +
                  base["5"]['base_stat']
                }</span>
              </div>

            </div>
          </div>
        </div>

      </DetalhesLadoEsquerdo>

      <DetalhesLadoDireito>
        <div className='pokemonDivDireito'>
          <p>#{details.id}</p>
          <h2>{details.name.charAt(0).toUpperCase() + details.name.slice(1)}</h2>
          <div className='tiposDireito'>
            {poder2 && <img src={getTypes(poder2)} />}
            {poder && <img src={getTypes(poder)} />}
          </div>
          <div className='divMoves'>
            <div className='move'>
              <h1>Moves:</h1>
              <span>{details.moves[0].move.name}</span><br />
              <span>{details.moves[1].move.name}</span><br />
              <span>{details.moves[2].move.name}</span><br />
              <span>{details.moves[4].move.name}</span><br />
            </div>
          </div>

        </div>
        <div className='imgDireito'>
          <img className='imgPokens' src={details.sprites?.other["official-artwork"].front_default} />         
        </div>
        
        <img className='bolaPoke' src={pokeball} />

        
      </DetalhesLadoDireito>

    </ContainerCard>

  )
}