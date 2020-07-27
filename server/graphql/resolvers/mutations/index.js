const user = require('./user.mutation');
const reflect = require('./reflect.mutation');


const Mutation = {
    ...user,
    ...reflect
};

module.exports = Mutation;