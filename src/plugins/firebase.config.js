import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"

// firebase 기본 설정 정보
const firebaseConfig = {
    apiKey: "AIzaSyCJC0v19Yr8hBrcQlC4OnumL5EWBSFfXAs",
    authDomain: "jikbang-clone.firebaseapp.com",
    projectId: "jikbang-clone",
    storageBucket: "jikbang-clone.appspot.com",
    messagingSenderId: "623631368096",
    appId: "1:623631368096:web:cfd00a9a0189e024332ec5",
    measurementId: "G-HPE6KY86QC"
};

// firebase 설정 초기화
const app = initializeApp(firebaseConfig);

// firestore 설정
const dbService = getFirestore();

/**
 * 컬렉션 타입에 해당하는 데이터 조회
 * @param type
 * @returns {Promise<QuerySnapshot<DocumentData>>}
 */
export const findAll = (type) => getDocs(collection(dbService, type));