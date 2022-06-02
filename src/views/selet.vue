<template>
<div>
    <el-select v-model="value" placeholder="Select" size="large">
        <el-option 
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        />
    </el-select>
     <el-select v-model="value" placeholder="Select" size="small">
        <el-option 
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        />
    </el-select>
     <el-select v-model="value" clearable placeholder="Select" >
        <el-option 
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
        />
    </el-select>
</div>
</template>

<script>
export default{
    data(){
        return{
            options:[
                {value:'Option1',label:'Option1'},
                {value:'Option2',label:'Option2',disabled:true},
                {value:'Option3',label:'Option3'},
                {value:'Option4',label:'Option4'},
                {value:'Option5',label:'Option5'},
            ],
            value:'',
            value:[]
        }
    }
}
</script>