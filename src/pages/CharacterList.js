import React from "react";
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query{
    characters {
      results{
       id
       name 
       image
      }
    }
  } 
`;

const CharacterList = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS)
  console.log({ data, loading, error })
  if (loading) return <div>spinner ...</div>
  if (error) return <div>something went wrong</div>
  return (
    <div className="List">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.img} />
            <h2>{character.name}</h2>
          </div>
        );
      })}


    </div>
  );
}

export default CharacterList;