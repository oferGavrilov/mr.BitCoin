<template>
  <form @submit.prevent="onSave" v-if="contact" class="contact-edit">
    <h2>{{getTitle}}</h2>
    <input 
        type="text" 
        v-model="contact.name"
        placeholder="Enter contact name..."
    />
    <input 
        type="text"
        v-model="contact.email"
        placeholder="Enter contact email..."
    />
    <input 
        type="text"
        v-model="contact.phone"
        placeholder="Enter contact number..."
    />
    <div class="btn-container">
      <button>Save</button>
      <RouterLink to="/contact">
          <button>Back</button>
      </RouterLink>
    </div>
  </form>
</template>

<script>
import { contactService } from "../services/contact.service";
export default {
  data() {
    return {
      contact: null,
    };
  },
  methods: {
   async onSave() {
      try {
        await this.$store.dispatch("saveContact", this.contact)
        this.$router.push("/contact")
      } catch (err) {
        console.log(err)
      }
    },
  },
    computed:{
    getTitle(){
        return  (this.contact._id ? 'Edit' : 'Add') + ' Contact'
    }
  },
  async created() {
    const { contactId } = this.$route.params
    if(contactId) this.contact = await contactService.getContactById(contactId)
    else this.contact = contactService.getEmptyContact()
    this.contact = {...this.contact }
  console.log('this.contact:', this.contact)
  },
}
</script>