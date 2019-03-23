let globalFunctions = {};

globalFunctions.logout = () => {
    localStorage.removeItem('patient_user_token');

    window.location = '/';
};

export default globalFunctions;
