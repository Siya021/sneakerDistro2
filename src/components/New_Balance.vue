<template>
    <div class="new">
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
        async fetchNew_balance() {
            const res = await fetch("https://siya021.github.io/VueJson/sneakers.json");
            let parsedData = await res.json()
            this.data = parsedData.new_balance;
        }
    },
    mounted() {
        this.fetchNew_balance()
    }
}
</script>

<style scoped>
.new{
    background-image: url('https://i.postimg.cc/pXWQKM8r/09d537c04256ed7bc50c8c3625e28cb0.jpg');
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