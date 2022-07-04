<template>
  <div class="commomTable">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :width="item.width ? item.width : 125"
      >
      </el-table-column>
      <el-table-column label="操作" min-width="180">
        <el-button size="mini" @click="handleEdit">编辑</el-button>
        <el-button size="mini" @click="handleDelete" type="danger">删除</el-button>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pager"
      layout="prev, pager, next"
      :total="50"
      :current-page="1"
    >
    </el-pagination>
  </div>

</template>

<script>
  export default {
    props:['tableData'],
    data() {
      return {
        tableLabel: [{
          prop:"date",
          label:"日期",
          width:"180" ,
        },{
          prop:"author",
          label:"姓名",
          width:"180" ,
        },{
          prop:"title",
          label:"标题",
          width:"280" ,
        },{
          prop:"article",
          label:"内容",
          width:"380" ,
        },{
          prop:"show",
          label:"显示",
          width:"180" ,
        }]
      }
    },
    methods: {
      handleEdit(){
        this.$emit('edit')
      },
      handleDelete(id){
        this.$emit('deleteRow',id)
      }
    }
  }
</script>

<style>
.commomTable{
  height: calc(100%-62px);
  background-color: #fff;
  position: relative;
  padding-bottom:40px;
}
.commomTable .pager{
  position: absolute;
  bottom: 0;
  right: 20px;
}
</style>