module.exports = {
    addUser: async (parent, {data: {userName, password}}, { User }) => {
        return await new User({
            userName,
            password
        }).save();
    }
};