import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBCn_aqgfUogtQ0i6ztjHdRn3PV9dH9D64",
  authDomain: "miniitter.firebaseapp.com",
  projectId: "miniitter",
  storageBucket: "miniitter.appspot.com",
  messagingSenderId: "536393511478",
  appId: "1:536393511478:web:2ea68957d4200c51c19e97",
  databaseURL: "https://miniitter-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function userDataUpload(uid, name, email) {
  set(ref(database, "users/" + uid), {
    name: name,
    email: email,
    uid: uid,
  }).then(() => {
    console.log("업로드 완");
  });
}

export function miniitterUpload(text, uid, postId) {
  set(ref(database, "users/" + uid + "/posts/" + postId), {
    text: text,
    time: Date.now(),
  }).then(() => {
    console.log("업로드 완");
  });
}
// miniitterUpload("이것ssss은추가할ㅇㅇ것입", "sssss", "m3");

export function liveUpdate() {
  const postsRef = ref(database, "users/" + "sssss" + "/posts/");
  onValue(postsRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}
