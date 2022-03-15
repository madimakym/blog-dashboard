export const handleApiError = (error) => {
    console.log("error api:", error.data.message);
    if (error.status === 400) {
        return error.data.message;
    }
    if (error.status === 401) {
        return error.data.message;
    }
    else {
        return "Impossible de traiter votre requête, erreur Interne du Serveur"
    }
}