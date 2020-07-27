const { gql } = require("apollo-boost");

export const GET_TEXT = gql`
	query{
		reflects{
            id
			text
		}
	}
`;

export const ADD_TEXT = gql`
   mutation($text: String!){
       addText(data: { text: $text })
       {
       text
       }
    }
`;

