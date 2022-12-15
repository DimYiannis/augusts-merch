<!-- eslint-disable vue/multi-word-component-names -->
<template>
 <div  @click.self="closeModels">
      <div >
        
    <button @click="male" :class="showMale ? 'secondphase' : 'firstphase'">Male Models</button>

        <div v-for="model in maleModels" :key="model.id">
            <h3 v-if="showMale">
            <img :src="model.img" />
            {{model.name}}</h3>
        </div>

    <button @click="female" :class="showFemale ? 'secondphase' : 'firstphase'">Female Models</button>

        <div v-for="model in femaleModels" :key="model.id">
            <h3 v-if="showFemale">
            <img :src="model.img" />
            {{model.name}}</h3>
        </div>

    </div>
 </div>
</template>

<script>
    export default {
        name: 'ModsItem',
        data() {
            return {
                models: [
                {
                    id: 1,
                    gender: 'male',
                    name: 'john Delan',
                    img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                },
                {
                    id: 2,
                    gender: 'male',
                    name: 'leo vremond',
                    img: "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
                },
                {
                    id: 3,
                    gender: 'female',
                    name: 'Eri dantey',
                    img: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                },
                {
                    id: 4,
                    gender: 'female',
                    name: 'Evi Andrews',
                    img: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                },
                {
                    id: 5,
                    gender: 'female',
                    name: 'Elpida kydrou',
                    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
                },
            ],
            showMale:false,
            showFemale: false,
          }
        },
     methods: {
        male() {
             this.showMale = !this.showMale
        },
        female() {
             this.showFemale = !this.showFemale
        },
         closeModels() {
      this.$emit('close')  
    }
        
    },
        computed: {
            maleModels() {
                return this.models.filter(model => model.gender == "male")
            },
            femaleModels() {
                return this.models.filter(model => model.gender == 'female')
            }
        },
    }
</script>

