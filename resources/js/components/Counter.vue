<template>
    <div>
        <div>
            {{data.count}} {{data.name}}
        </div>
        <div>
            {{other}}
        </div>
        <div>
            {{sq}}
        </div>

        <input :value="data.name" @input="changeName"/>

        <button @click="start">Start</button>
        <button @click="stop">Stop</button>
        <button @click="incrementAsync({delay : 1000})">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
    import Component from '../VuexComponent';

    export default new Component()
        .state('data')
        .mutations('increment','decrement','changeName')
        .actions('incrementAsync')
        .init({
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

            computed : {
                sq() {
                    return this.data.count * this.other * this.other;
                }
            },

            data() {
                return {
                    other : 2
                }
            }
        });
</script>
