<template>
  <ul v-if="transfers" class="transfer-list">
    <h2>Trade history</h2>
    <li v-for="(transfer , idx) in transfers" :key="idx">
        <TransferPreview :transfer="transfer"/>
    </li>
  </ul>
</template>

<script>
import { userService } from '../services/user.service'
import TransferPreview from './transfer-preview.vue'
export default {
    props:['contactId', 'numberOfItems'],
    data() {
        return{
            transfers: null
        }
    },
    created() {
        let transfers = userService.getTransactions()
        if(this.contactId) {
            transfers = transfers.filter(transfer => transfer.toId === this.contactId)
        }
        if(this.numberOfItems){
            transfers = transfers.splice(transfers.length - this.numberOfItems)
        }
        this.transfers = transfers
            console.log(this.transfers)            
    },
    components: { TransferPreview },
}
</script>

<style>

</style>