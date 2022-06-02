<template>
<div>
    <el-checkbox v-model="checked" size="small">选项1</el-checkbox>
    <el-checkbox v-model="checked1" size="large" label="Option 1" ></el-checkbox>
     <el-checkbox v-model="checked" label="我帅吗" size="large" border></el-checkbox>
</div>
<div>
    <el-checkbox v-model="checked1" disabled>Disabled</el-checkbox>
    <el-checkbox v-model="checked">Not disabled</el-checkbox>
</div>
<div >
    <el-checkbox-group v-model="likes">
        <el-checkbox label="OptionA"></el-checkbox>
        <el-checkbox label="OptionB"></el-checkbox>
        <el-checkbox label="disabled" disabled></el-checkbox>
        <el-checkbox label="selected and disabled" disabled></el-checkbox>
    </el-checkbox-group>
</div>
<div>
    <el-checkbox 
    v-model="checkAll"
    :indeterminate="indeterminate"
    @change="changeAll"
    >
        <el-checkbox-group 
        v-model="checkedCities"
        @change="change"
        >
        <el-checkbox v-for="city in cities" :key="city" :label="city">{{city}}</el-checkbox>
        </el-checkbox-group>
    </el-checkbox>
</div>
<div>
    <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
        <el-checkbox v-for="city in cities" :key="city" :label="city">{{city}}</el-checkbox>
    </el-checkbox-group>
</div>
<div>
    <el-checkbox-group v-model="checkGroup1" size="large">
        <el-checkbox-button
        v-for="city in cities" 
        :key="city" 
        :label="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
</div>
</template>

<script>
export default {
    data(){
        return{
            likes:[],
            checked:true,
            checked1:false,
            checkAll:false,
            indeterminate:true,
            checkedCities:['shanghai','beijing'],
            cities:['shanghai','beijing','xiamen','guangzhou'],
            checkGroup1:['shanghai'],
        }
    },
    methods:{
        changeAll(val){
        this.checkedCities = val ? this.cities:[]
        this.indeterminate=false
        },
        change(value){
        const checkCount=value.length
        this.checkAll= checkCount===this.cities.length
        this.indeterminate=checkCount>0 && checkCount<this.cities.length
        }
    }
}


</script>