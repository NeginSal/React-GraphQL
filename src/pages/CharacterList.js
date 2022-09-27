import React from "react";
import { useCharacters } from "../hooks/useCharacters";




const CharacterList = () => {

  const { data, error, loading } = useCharacters()
  console.log({ data, loading, error })
  if (loading) return <div>spinner ...</div>
  if (error) return <div>something went wrong</div>
  return (
    <div className="List">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.img} alt=""/>
            <h2>{character.name}</h2>
          </div>
        );
      })}


    </div>
  );
}

export default CharacterList;