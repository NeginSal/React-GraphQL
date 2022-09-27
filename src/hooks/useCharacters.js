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

export const useCharacters = () => {
    const { data, loading, error } = useQuery(GET_CHARACTERS)
    return {
        error, data, loading

    }
} 