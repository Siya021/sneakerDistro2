<template>
    <div>
        <h1>Contact Us</h1>
        <Form />
    </div>
</template>

<script>
import Form from '@/components/Form.vue';
    export default {
        components:{
            Form
        }
    }
</script>

<style scoped>
*::after,
*::before{
display: flex;
justify-content: center;
align-content: center;
}
</style>