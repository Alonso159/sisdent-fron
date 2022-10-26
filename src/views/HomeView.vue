<template>
  <hello-world />
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
          const res=[];
       await axios
        .get("/ControllerCita/GetAllCitas")
        .then((x) => {
          
        })
        .catch((err) => console.log(err));
      

   }
    },
    components: {
      HelloWorld,
    },
  }
</script>
