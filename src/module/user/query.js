export default {
  getMyProfile: async (parent, args, context) => {
    const response = await context.dataSources.userAPI.getMe();
    console.log('response for get my profile query ---> ', response.data[0].email);
    return { email: response.data[0].email };
  },
};
