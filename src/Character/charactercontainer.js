import React, { Component } from 'react'
import axios from 'axios';
import CharacterItem from './CharacterItem'


export default class Charactercontainer extends Component {

    state = {
        characters : []
    }

    componentDidMount(){
        this.getCharacters()
    }

    async getCharacters() {
        const res = await axios.get('https://rickandmortyapi.com/api/character/')
        this.setState({
            characters: res.data.results 
        })
    }

    
    render() {
        return (

            <CharacterItem  ></CharacterItem>
        )
    }
}
