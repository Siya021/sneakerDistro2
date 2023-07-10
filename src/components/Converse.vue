<template>
    <div class="converse">
        <div class="container">
            <div class="row">
                <div class="col-4" v-for="item in data" :key="item.id">
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
        async fetchConverse() {
            const res = await fetch("https://siya021.github.io/VueJson/sneakers.json");
            let parsedData = await res.json()
            this.data = parsedData.converse;
        }
    },
    mounted() {
        this.fetchConverse()
    }
}
</script>

<style scoped>
.converse{
    background-image: url('https://i.postimg.cc/W1f72Yd3/1d751eca966314b340c4e39a1faa0382.jpg');
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