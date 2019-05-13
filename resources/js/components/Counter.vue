<template>
    <div v-show="!busy">
        <div>
            {{count}} {{name}}
        </div>

        <input :value="name" @input="changeName"/>

        <button @click="start">Start</button>
        <button @click="stop">Stop</button>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
    import sleep from 'sleep-promise';
    import Component from '../SpartanComponent';

    export default new Component()
        .namespace('settings')
        .state('count','name')
        .mutations('increment','decrement','changeName')
        // .actions('getCachedState','dataFetched')
        .init({

            async mounted() {

                this.working();
                await this.bindLocalState();
                this.doneWorking();
            },

            methods : {
                start() {
                    this.setInterval({
                        key : 'increment',
                        callback : this.increment,
                        interval : 1000
                    });
                },

                stop() {
                    this.clearInterval('increment');
                }
            },
        });
</script>

<style lang="scss">

</style>