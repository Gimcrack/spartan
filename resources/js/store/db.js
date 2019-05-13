import firebase from 'firebase';

// Get a Firestore instance
export const db = firebase
    .initializeApp({ projectId: process.env.FIREBASE_PROJECT_ID || 'api-project-329542115952' })
    .firestore();

// Export types that exists in Firestore
// export { TimeStamp, GeoPoint } = firebase.firestore;

// if using Firebase JS SDK < 5.8.0
// db.settings({ timestampsInSnapshots: true });