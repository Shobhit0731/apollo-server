export default {
  loginUser: async (parent, args, context) => {
    const { payload: { email, password } } = args;
    console.log('args ---> ', args);
    const { dataSources: { userAPI } } = context;
    // console.log('UserAPI context ---> ',context);
    const response = await userAPI.loginUser({ email, password });
    console.log('response---> ', response);
    return response;
  },
};
