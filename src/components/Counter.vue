<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <button @click="increment" class="btn btn-success">+</button>
            </div>
            <div class="col">
                <p class="lead">{{ counter }}</p>
            </div>
            <div class="col">
                <button @click="decrement" class="btn btn-danger">-</button>
            </div>  
        </div>    
    </div>
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.state.counter
            }
        },
        methods: {
            increment(){
                this.$store.dispatch('increment')
            },
            decrement(){
                this.$store.dispatch('decrement')
            }
        }
    }
</script>

<style scoped>
.btn{
    width: 11rem; 
}
</style>