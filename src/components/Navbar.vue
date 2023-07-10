<template>
  <nav
    class="container-fluid navbar navbar-expand-lg navbar-light bg-dark"
    id="myNav"
  >
    <a href="#" class="navbar-brand"><span>[</span> Siyamthanda Mazokwana <span>]</span></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggle-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav mr-auto">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <router-link to="/About" class="nav-item nav-link">About</router-link>
        <router-link to="/Products" class="nav-item nav-link"
          >Products</router-link
        >
        <router-link to="/ContactUs" class="nav-item nav-link"
          >Contact Us</router-link
        >
      </div>
      <form class="d-flex">
        <input
          type="search"
          class="form-control me-2"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-warning" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
/*
.navbar-light {
  width: 100% !important;
}
*/
span{
  color: greenyellow;
}
.navbar-brand{
  color: green;
  font-style: unset ;
  font-family: monospace;
  margin-left: 20px;
}
.navbar-brand:hover{
  color: orange;

}
</style>
