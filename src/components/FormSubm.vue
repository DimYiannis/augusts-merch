<!-- eslint-disable no-unused-vars -->
<template>
 <div class="backdrop" @click.self="closeForm">
  <div class="modal">
   <form @submit.prevent="submitForm">
      <div>  
        <label>First Name:</label>
        <input @keyup.enter="submitForm" type="text" id="firstname" required v-model.trim.lazy="formValues.firstname">
      </div>

     <div>
        <label>Last Name:</label>
        <input @keyup.enter="submitForm" type="text" id="lastname" required v-model="formValues.lastname">
     </div>

     <div>
        <label>Email:</label>
        <input  @keyup.enter="submitForm" type="email" required v-model="formValues.email">
     </div>

     <div>
        <label>Personal Info</label>
        <textarea @keyup.enter="submitForm" name="info" id="personalinfo" cols="30" rows="5"></textarea>
     </div>

     <div>
        <label>Clothes</label>
        <select name="clothes" id="clothes" v-model="formValues.clothes">
            <option value="">Category</option>
            <option value="shirts">Shirts</option>
            <option value="jackets">Jackets</option>
            <option value="jeans">Jeans</option>
            <option value="trousers">Trousers</option>
        </select>
     </div>
    </form>
  </div>
 </div>
</template>

<script>


    export default {
        name: 'FormSubmit',
        data() {
            return {
                formValues: {
                firstname: '',
                lastname: '',
                email: '',
                clothes: '',
                }
            }
        },
        methods: {
             submitForm() {
            console.log('form values', this.formValues)
            },
            closeForm() {
                this.$emit('close')
            },
            createPost() {
                axios
                    .post('https://jsonplaceholder.typicode.com/posts', this.formValues)
                    .then((response) => console.log(response))
                    .catch((error) => console.log(error))
            },
        }
    }
</script>

