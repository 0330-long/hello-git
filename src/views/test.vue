<template>
<el-button type="success" round>哈喽</el-button>
<el-button type="primary" :icon="Edit">哈喽1</el-button>

<el-calendar v-model="value"></el-calendar>
</template>

<script>
import {Check,Delete,Edit,Message,Search,Star}from '@element-plus/icons-vue'
export default{
    data(){
        return{
            Edit,
            Delete,
            Check,
            Message,
            Search,
            Star,
            value: new Date(),
        }
    }
}
</script>