const Reflect = {
  user: async (parent, args, { User }) => {
      return await User.findById(parent.userID);
  }   
};

module.exports = Reflect;