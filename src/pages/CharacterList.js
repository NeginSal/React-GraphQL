import React from "react";
import { useQuery } from '@apollo/client';

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
    const {data,loading,error}= useQuery(GET_CHARACTERS)
    console.log({data,loading,error})
    return (
        <div>

        </div>
    );
}

export default CharacterList;