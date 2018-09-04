import {db} from './firebase';

export const doCreateUser = (id, username, email) =>
db.ref(`users/${id}`).set({
  username,
  email
});

export const onceGetUsers = () => db.ref('users').once('value');


// import { db } from './firebase';
//
// // User API
//
// export const doCreateUser = (id, username, email) =>
//   db.ref(`users/${id}`).set({
//     username,
//     email,
//   });
//
// export const onceGetUsers = () =>
//   db.ref('users').once('value');
//
// // Other Entity APIs ...
