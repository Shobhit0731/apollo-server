import userInstance from '../../service/user';

export default {
  createTrainee: (parent, args) => {
    const { user } = args;
    return userInstance.createUser(user);
  },
  updateTrainee: (parent, args) => {
    const { id, role } = args;
    return userInstance.updateUser(id, role);
  },
  deleteTrainee: (parent, args) => {
    const { id } = args;
    return userInstance.deleteUser(id);
  },
};
