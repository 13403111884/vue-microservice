export default {
    name: 'app',
    namespaced: true,
    state: {},

    getters: {},

    mutations: {
        getRouteName (state: any, {route, routeName}: any) {
            routeName = route.name
        }
    },

    actions: {},
};
