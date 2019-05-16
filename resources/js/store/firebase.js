import FB from 'firebase';

// Get a Firestore instance
export const firebase = FB
    .initializeApp({ projectId: process.env.FIREBASE_PROJECT_ID || 'api-project-329542115952' })
    .firestore();

// Export types that exists in Firestore
export const { TimeStamp, GeoPoint } = FB.firestore;
