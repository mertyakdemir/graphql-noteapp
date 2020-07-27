const Query = {
    user: async (parent, args, {User}) =>{
        return await User.findById(args.id);
    },
    users: async (parent, args, {User}) => {
        return await User.find({});
    },
    reflect: async (parent, args, {Reflect}) =>{
        return await Reflect.findById(args.id);
    },
    reflects: async (parent, args, {Reflect}) => {
        return await Reflect.find({});
    },
    
};

module.exports = Query;