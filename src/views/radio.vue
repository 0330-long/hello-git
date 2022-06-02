<template>
<div>
    <el-radio-group v-model="radio">
        <el-radio label="1" >选项1</el-radio>
        <el-radio label="2" size="small">选项2</el-radio>
        <el-radio label="1" disabled>选项3</el-radio>
    </el-radio-group>
</div>
<div>
    <el-radio-group v-model="radio1">
        <el-radio :label="3">OptionA</el-radio>
        <el-radio :label="6">OptionB</el-radio>
        <el-radio :label="9">OptionC</el-radio>
    </el-radio-group>
</div>
<div>
    <el-radio-group v-model="radio2">
        <el-radio-button label="New York"></el-radio-button>
        <el-radio-button label="厦门"></el-radio-button>
        <el-radio-button label="新疆"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
    </el-radio-group>
</div>
</template>

<script>
export default{
    data(){
        return{
            radio:'1',
            radio1:3,
            radio2:'New York',
        }
    }
}
</script>