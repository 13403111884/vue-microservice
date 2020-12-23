const urlName = '/v1/user'

export default (API: any) => ({
  getUserInfo ({ params, data }: any ) {
    return API({ url: `${urlName}/getUserInfo`, params, data });
  },
  apiTest ({ params, data }: any ) {
    return true
  }
})