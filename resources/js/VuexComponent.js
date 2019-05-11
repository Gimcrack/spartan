import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

const global_mutations = [
    'setInterval',
    'clearInterval',
    'setTimeout',
    'clearTimeout',
    'working',
];

const global_actions = [
    'doneWorking'
];

const global_state = [
    'busy'
];

export default class VuexComponent {

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
            return this.initNamespace(args);

        args = args || this._args || {};

        let local = {
            methods : (args.methods) ? args.methods : {},
            computed : (args.computed) ? args.computed : {}
        };

        return Object.assign({}, args, {
            methods : {
                ...mapMutations([this._mutations, ...global_mutations].flat()),
                ...mapActions([this._actions, ...global_actions].flat()),
                ...local.methods
            },

            computed : {
                ...mapGetters(this._getters),
                ...mapState([this._state, ...global_state].flat()),
                ...local.computed
            }
        });
    }

    initNamespace(args) {
        args = args || this._args || {};

        let local = {
            methods : (args.methods) ? args.methods : {},
            computed : (args.computed) ? args.computed : {}
        };

        return Object.assign({}, args, {
            methods : {
                ...mapMutations(global_mutations),
                ...mapMutations(this._namespace, this._mutations),
                ...mapActions(global_actions),
                ...mapActions(this._namespace,this._actions),
                ...local.methods
            },

            computed : {
                ...mapGetters(this._namespace,this._getters),
                ...mapState(this._namespace,this._state),
                ...mapState(global_state),
                ...local.computed
            }
        });
    }
}