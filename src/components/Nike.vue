<template>
    <div class="nike">
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in data" :key="item.id">
                    <div class="card" style="width: 18rem;">
                        <img :src="item.image" class="card-img-top" :alt="item.title">
                        <div class="card-body">
                          <products-view>{{ item.title }}</products-view>
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
            async fetchNike() {
                const res = await fetch("https://siya021.github.io/VueJson/sneakers.json");
                let parsedData = await res.json()
                this.data = parsedData.nike;
            }
        }, 
        mounted() {
            this.fetchNike()
        }
    }
</script>

<style scoped>
.nike{
    background-image: url('https://i.postimg.cc/1t1wtks9/3271a637cdaf3fff549e5e49e44a4357.jpg');
}
.card{
    background-color: black;
    color: white;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: small;
    font-weight: 400;
}
</style>