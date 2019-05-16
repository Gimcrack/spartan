import {firestoreAction} from "vuexfire";
import {firebase} from "../../firebase";

export default function(module) {

    return {

        /**
         * Save the local module state to the firestore db
         */
        persistLocalState : firestoreAction(({ state }) => {
            console.log('persisting state');
            return firebase.collection('spartan')
                .doc(module)
                .set({ ...state, updated_at : Date.now() });
        }),

        /**
         * Bind the local state data to the firestore db
         * @param context
         */
        bindLocalState(context) {
            context.dispatch('bindData',module,{root : true});
        },
    }
}