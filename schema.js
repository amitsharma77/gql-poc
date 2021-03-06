import { buildSchema } from "graphql";

const schema = buildSchema(
  `
    type Friend {
      id : ID
      firstName : String
      lastName : String
      gender: String
      language : String
      email : String
  }
  input FriendInput {
    id : ID 
    firstName : String!
    lastName : String
    gender: String
    language : String
    email : String

  } 
  type Mutation {
    createFriend (input:FriendInput) : Friend
  }
  type Query{
        friend: Friend,
        getFriend(id:ID):Friend
    }
    
    `
);

export default schema;
