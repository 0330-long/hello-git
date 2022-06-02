<script>
import { getUsers } from "./api/user";

export default {
  data(){
    return {
      users:[]
    }
  },
  created(){
    // this.getUsers()
  },
  methods: {
  async getUsers (){
    try {
    const response = await getUsers({page:2,sex:1})
    this.users =response.data 
   } catch(err){
     
   }
  }
  }
}
</script>

<template>
<router-view />
</template>