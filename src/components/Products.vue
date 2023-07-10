<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in data" :key="item.id">
                    <div class="card" style="width: 18rem;">
                        <img :src="item.image" class="card-img-top" :alt="item.title">
                        <div class="card-body">
                          <h1>{{ item.title }}</h1>
                          <h4>{{item.price }}</h4>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: []           
            }
        },
        methods: {
            async fetchData() {
                const res = await fetch("https://siya021.github.io/VueJson/sneakers.json");
                let parsedData = await res.json()
                this.data = parsedData.sneakerList;
            }
        }, 
        mounted() {
            this.fetchData()
        }
    }
</script>

<style scoped>
.card{
    background-color: black;
    color: white;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: small;
    font-weight: 400;
}
</style>