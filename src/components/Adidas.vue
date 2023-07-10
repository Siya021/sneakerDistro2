<template>
    <div class="adidas">
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in data" :key="item.id">
                    <div class="card" style="width: 18rem;">
                        <img :src="item.image" class="card-img-top" :alt="item.title">
                        <div class="card-body">
                            <p>{{ item.title }}</p>
                            <h4>{{ item.price }}</h4>
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
        async fetchAdidas() {
            const res = await fetch("https://siya021.github.io/VueJson/sneakers.json");
            let parsedData = await res.json()
            this.data = parsedData.adidas;
        }
    },
    mounted() {
        this.fetchAdidas()
    }
}
</script>

<style scoped>
.adidas{
    background-image: url('https://i.postimg.cc/RZqcb1gz/52fe26771081b8193b0a7edb742e7ed6.jpg')
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