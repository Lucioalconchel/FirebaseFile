// import { initializeApp } from "firebase/app";
// import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'
// import {v4} from 'uuid'

// const firebaseConfig = {
//   apiKey: "AIzaSyBpDlcV_MqTsSsyfCmk6ato2ans2UHn15M",
//   authDomain: "react-firebase-570a9.firebaseapp.com",
//   projectId: "react-firebase-570a9",
//   storageBucket: "react-firebase-570a9.appspot.com",
//   messagingSenderId: "183665776142",
//   appId: "1:183665776142:web:971f42a6d1457b71ce8e5f"
// };


// const app = initializeApp(firebaseConfig);

// export const storage = getStorage(app);

// export async function uploadFile(file) {
//   const storageRef = ref(storage, 'dbz/'+(file.name+v4()));
//   //debes ser dinamico o cada carpeta debe tener su funcion
//   await uploadBytes(storageRef, file);

//   const url = await getDownloadURL(storageRef)
//   return url;
// }