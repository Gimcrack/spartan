<template>
    <div v-show="!busy">


        <input placeholder="Say something..." @keyup.enter="addMessage"/>

        <p v-for="(message,idx) in messages" :key="idx">
            {{message}}
        </p>
    </div>
</template>

<script>
    import sleep from 'sleep-promise';
    import Component from '../SpartanComponent';

    export default new Component()
        .namespace('settings')
        .state('count','name','messages')
        .mutations('increment','decrement','changeName','addMessage')
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