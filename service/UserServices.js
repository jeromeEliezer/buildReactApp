import api from './api';

const userServices = {  
 
    addUser: async (id, email, pseudo, nom, password, prenom, sexe, niveau, image) => {
        const user = {id, email, pseudo, nom, password, prenom, sexe, niveau, image};
        return await api.post('/events/', user);
    },

    login: async (user) => {
        return await api.post( '/users/login/',user);
    },
     findUser: async (pseudo) => {
        return await api.get(`/users/${pseudo}`);
    },

    signup: async (user) => {
        return await api.post('/users/signup', user)
    },
    profile: async (user) => {
        return await api.get(`/users/myprofile`, user)
    },

    putProfile: async (user) => {
        return await api.put(`/users/myprofile`, user)
    },

    deleteProfil: async () => {
        return await api.delete(`/users/myprofile`)
    },

    getAllMyParticipateEvents: async () => {
        return await api.get(`/users/events`)
    },
    
    getAllMyEvents: async () => {
        return await api.get(`/events/myevents`)
    },


}

export default userServices;