import pubsub from '../pubsub';
import constant from '../../lib/constant';
import userInstance from '../../service/user';

export default {
  createTrainee: (parent, args) => {
    const { user } = args;
    const addUser = userInstance.createUser(user);
    pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: addUser });
    return addUser;
  },
  updateTrainee: (parent, args) => {
    const { id, role } = args;
    const updateUser = userInstance.updateUser(id, role);
    pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updateUser });
    return updateUser;
  },
  deleteTrainee: (parent, args) => {
    const { id } = args;
    const deletedId = userInstance.deleteUser(id);
    pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: deletedId });
    return deletedId;
  },
};
