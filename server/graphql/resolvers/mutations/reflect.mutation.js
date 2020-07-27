module.exports = {
    addText: async (parent, {data: {text, userID}}, { Reflect }) => {
        return await new Reflect({
            text,
            userID
        }).save();
    }
};