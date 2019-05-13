import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

// --- Root Store properties, available everywhere ---
const root_mutations = [
    'setInterval',
    'clearInterval',
    'setTimeout',
    'clearTimeout',
    'working',
];

const root_actions = [
    'doneWorking',
    'bindData'
];

const root_state = [
    'busy'
];

// --- Local Module properties, available to each module ---
const local_actions = [
    'bindLocalState'
];


export default class SpartanComponent {

    constructor(args, options) {
        options = options || {};

        this._args = args || {};
        this._mutations = options.mutations || {};
        this._actions = options.actions || {};
        this._getters = options.getters || {};
        this._state = options.state || {};
    }

    namespace(namespace) {
        this._namespace = namespace;

        return this;
    }

    mutations(...mutations) {
        this._mutations = mutations.flat();

        return this;
    }

    actions(...actions) {
        this._actions = actions.flat();

        return this;
    }

    getters(...getters) {
        this._getters = getters.flat();

        return this;
    }

    state(...state) {
        this._state = state.flat();

        return this;
    }

    init(args) {
        if (this._namespace)
            return this.initWithNamespace(args);

        args = args || this._args || {};

        let local = {
            methods : (args.methods) ? args.methods : {},
            computed : (args.computed) ? args.computed : {}
        };

        return Object.assign({}, args, {
            methods : {
                ...mapMutations([this._mutations, ...root_mutations].flat()),
                ...mapActions([this._actions, ...root_actions].flat()),
                ...local.methods
            },

            computed : {
                ...mapGetters(this._getters),
                ...mapState([this._state, ...root_state].flat()),
                ...local.computed
            }
        });
    }

    initWithNamespace(args) {
        args = args || this._args || {};

        let local = {
            methods : (args.methods) ? args.methods : {},
            computed : (args.computed) ? args.computed : {}
        };

        return Object.assign({}, args, {
            methods : {
                ...mapMutations(root_mutations),
                ...mapMutations(this._namespace, this._mutations),
                ...mapActions(root_actions),
                ...mapActions(this._namespace,this._actions),
                ...mapActions(this._namespace,local_actions),
                ...local.methods
            },

            computed : {
                ...mapGetters(this._namespace,this._getters),
                ...mapState(this._namespace,this._state),
                ...mapState(root_state),
                ...local.computed
            }
        });
    }
}