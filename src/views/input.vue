<template>
<div>
    <el-input v-model="about" placeholder="please input" clearable></el-input>
    <el-input v-model="about" disabled placeholder="please input" clearable></el-input>
    <el-input
        v-model="about"
        :formatter="val => `$ ${val}`"
        :parser="val => val.replace(/\$\s/, '')"
    >
    </el-input>
    <el-input v-model="about" placeholder="please in password" show-password> </el-input>
    
</div>
<div class="demo-input">
    
        <span>使用</span>
        <el-input 
        v-model="about1" 
        placeholder="Pick a date" 
        :suffix-icon="Calendar" class="demo-input-text"></el-input>
        <el-input 
        v-model="about2" 
        placeholder="Type something" 
        :prefix-icon="Search" class="demo-input-text"></el-input>
    
</div>
<div class="demo-input">
   
    <span>使用者2</span>
    <el-input v-model="about3" placeholder="Pick a date">
        <template #suffix>
            <el-icon>
                <Calendar />    
            </el-icon>
        </template>
    </el-input>
    <el-input v-model="about4" placeholder="Type something">
    <template #prefix>
        <el-icon>
            <Search />
        </el-icon>
    </template>
    </el-input>
   
</div>
<div>
    <el-input v-model="textarea" :row="2" type="textarea"></el-input>
    <el-input 
    v-model="textarea1" 
    autosize 
    type="textarea" placeholder="Please input"></el-input>
    <div class="big">
        <el-input 
        v-model="textarea2" 
        :autosize="{minRows:2,maxRows:4}" 
        type="textarea" placeholder="Please input"></el-input>
    </div>
</div>
<div>
    <el-input v-model="input1" placeholder="Please input">
        <template #prepend>Http://</template>
    </el-input>
</div>
<div>
    <el-input v-model="input2" placeholder="Please input">
        <template #append>.com</template>
    </el-input>
</div>
<div>
    <el-input v-model="input3" placeholder="Please input">
        <template #prepend>
            <el-select v-model="select" placeholder="Select" style="width:115px">
                <el-option label="Rest" value="1" />
                <el-option label="Order" value="2" />
                <el-option label="Tel" value="3" />
            </el-select>
        </template>
        <template #append>
            <el-button :icon="Search"></el-button>
        </template>
    </el-input>
</div>
</template>

<script>
import{Calendar,Search} from '@element-plus/icons-vue'

export default{
    components: {
        Calendar,
        Search,
    },
    data(){
        return{
            about: '',
            Calendar,
            Search,
            about1:'',
            about2:'',
            about3:'',
            about4:'',
            textarea:'',
            textarea1:'',
            textarea2:'',
            input1:'',
            input2:'',
            input3:'',
            select:'',
        }
    }
}
</script>

<style scoped>
.demo-input{
    display: flex;
    white-space: nowrap;
}
.big{
    margin: 20px 0;
}
</style>