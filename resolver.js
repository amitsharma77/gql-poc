class Friend {
  constructor(id, { firstName, lastName, gender, language, email }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.language = language;
    this.email = email;
  }
}

const friendDataBase = {};

const resolvers = {
    getFriend :({input})=>{
        return new Friend(id,friendDataBase[id])
    },
    friend: () => {
        return {
        id: 112233,
        firstName: "Amit ",
        lastName: "Sharma",
        gender: "Male",
        language: "English",
        emails: [{ email: "ab@b.com" }, { email: "tt@b.com" }]
        };
    },
    createFriend: ({ input }) => {
        let id = require("crypto")
        .randomBytes(10)
        .toString("hex");
        friendDataBase[id] = input;
        return new Friend(id, input);
    }
};

export default resolvers;
