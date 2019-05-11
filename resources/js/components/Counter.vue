<template>
    <div v-show="!busy">
        <div>
            {{count}} {{name}}
        </div>
        <div>
            {{other}}
        </div>
        <div>
            {{sq}}
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
    import Component from '../VuexComponent';

    export default new Component()
        .namespace('data')
        .state('count','name')
        .mutations('increment','decrement','changeName')
        .actions('getCachedState','dataFetched')
        .init({

            async mounted() {
                this.working();
                await this.getCachedState();

                this.doneWorking();

                await sleep(5000);

                this.dataFetched({count : 1000, name : 'Ben Kenobi'});

                this.start();
            },

            methods : {
                start() {
                    this.setInterval({
                        key : 'increment',
                        callback : this.increment,
                        interval : 100
                    });
                },

                stop() {
                    this.clearInterval('increment');
                }
            },

            computed : {
                sq() {
                    return this.count * this.other * this.other;
                }
            },

            data() {
                return {
                    other : 2
                }
            }
        });
</script>

<style lang="scss">

</style>