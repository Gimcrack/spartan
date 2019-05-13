import {firestoreAction} from "vuexfire";
import {db} from "../db";

export default function(module) {

    return {
        persistLocalState : firestoreAction(({ state }) => {
            console.log('persisting state');
            return db.collection('spartan')
                .doc(module)
                .set({ ...state, updated_at : Date.now() });
        }),

        bindLocalState(context) {
            context.dispatch('bindData',module,{root : true});
        }
    }
}