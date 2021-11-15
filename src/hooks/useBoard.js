import {findAll} from "../plugins/firebase.config.js";

const useBoard = () => {

    const getBoards = async () => {
        try {
            return await findAll('news');
        } catch (e) {
            console.log('error {} => ', e);
            return [];
        }
    };

    return {
        getBoards
    };
}

export const { getBoards } = useBoard();