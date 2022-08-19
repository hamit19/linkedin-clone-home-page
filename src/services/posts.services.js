import { db } from "../firebase/FirebaseConfig";
import { collection } from "firebase/firestore/lite";
import {
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore/lite";

const postsCollectionRef = collection(db, "posts");

const q = query(postsCollectionRef, orderBy("tiemestamp", "desc"));

class PostsDataService {
  addPost(newPost) {
    return addDoc(postsCollectionRef, newPost);
  }

  getAllPosts() {
    return getDocs(q);
  }

  updatePost(id, updatedPost) {
    const postDoc = doc(db, "posts", id);
    return updateDoc(postDoc, updatedPost);
  }

  deletePost(id) {
    const postDoc = doc(db, "posts", id);
    return deleteDoc(postDoc);
  }

  getPost(id) {
    const postDoc = doc(db, "posts", id);
    return getDoc(postDoc);
  }
}

export default new PostsDataService();
