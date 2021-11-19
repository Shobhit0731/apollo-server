import user from '../../service/user';

export default {
  getAllTrainees: () => user.getAllTrainees(),
  getTrainee: (parent, args) => {
    const { id } = args;
    return user.getUser(id);
  },
};
