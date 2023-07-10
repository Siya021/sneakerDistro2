<template>
    <div>
        <h1>Products</h1>
        
        <div class="row">
            <div class="col">
                <h2>Nike</h2>
                <Nike/>
            </div> 
        </div>
        <div class="row">
            <div class="col">
                <h2>Converse</h2>
                <Converse/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h2>New Balance</h2>
                <New_Balance/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h2>Adidas</h2>
                <Adidas/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h2>Puma</h2>
                <Puma/>
            </div>
        </div>
    </div>
</template>

<script>
import Nike from '@/components/Nike.vue';
import Adidas from '@/components/Adidas.vue';
import New_Balance from '@/components/New_Balance.vue';
import Puma from '@/components/Puma.vue';
import Converse from '@/components/Converse.vue';
    export default {
        components:{
            Nike,
            Adidas,
            Puma,
            Converse,
            New_Balance
        }
    }
</script>

<style scoped>

</style>