<template>
</template>

<script>
import axios from "axios";  
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',
    async created() {

    this.obtieneInfoCronogramaCreado();
  },
    methods:{
        async obtieneInfoCronogramaCreado(){
          
       
       await axios
        .get("/ControllerCita/GetAllCitas")
        .then((x) => {
          console.log(x.data)
        })
        .catch((err) => console.log(err));
      

   }
    },
    components: {
      HelloWorld,
    },
  }
</script>
