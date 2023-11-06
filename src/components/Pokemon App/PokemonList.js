import React from 'react'
import "../../App.css"
function PokemonList({pokemon}) {
  return (
    <div className='list'>
        {
           pokemon.map(p => <div key={p} className='item'>{p}</div>)
        }
    </div>
  )
}

export default PokemonList