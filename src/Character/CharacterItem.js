import React from 'react'

export default function CharacterItem  ({ character, name }) {


    return (
        <div>
            <img src={character.image} alt=""/>
            <h4>{character.name}</h4>
            <p>{character.status}</p>
            <p>{character.gender}</p>
            <p>{character.origin.name}</p>
        </div>
    );
}

// export defalut CharacterItem;
