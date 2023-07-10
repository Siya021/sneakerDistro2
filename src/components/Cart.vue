<template>
    <div>
        <a href="#" class="fa fa-shopping-cart" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="addToCart()"></a>
                      
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Cart</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div class="modal-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="modal-footer">
                <p class="total-price">Total: R0.00</p>
                <button type="button" class="checkoutBTN">Checkout</button>
              </div>
            </div>
          </div>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>