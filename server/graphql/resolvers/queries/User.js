const User = {
    reflects: async (parent, args, { Reflect }) => {
        return await Reflect.find({userID: parent._id});
    }   
  };
  
  module.exports = User;