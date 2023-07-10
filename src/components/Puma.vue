<template>
    <div class="puma">
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in data" :key="item.id">
                    <div class="card" style="width: 18rem;">
                        <img :src="item.image" class="card-img-top" :alt="item.title">
                        <div class="card-body">
                            <div class="spinner-grow text-success" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-warning" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-danger" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <p><small>Coming Soon</small></p>
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
        async fetchPuma() {
            const res = await fetch("https://siya021.github.io/VueJson/sneakers.json");
            let parsedData = await res.json()
            this.data = parsedData.puma;
        }
    },
    mounted() {
        this.fetchPuma()
    }
}
</script>

<style scoped>
h4{
    text-decoration: solid line-through;
    text-decoration-color: darkorange;
    text-decoration-line: line-through;
}
.puma {
    background-image: url('https://i.postimg.cc/VNCXzfyG/fd7ae082579249d1b5aa5faf9eb70ff1.jpg');
}

.card {
    background-color: black;
    color: white;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: small;
    font-weight: 400;
}
</style>