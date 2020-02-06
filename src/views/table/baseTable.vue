<template>
  <div class="table">
    <div class="table-top">
      <el-row>
        <el-input
          placeholder="姓名"
          v-model="name"
          class="el-input__inner_search "
        >
          <el-button
            slot="append"
            @click="getData"
            icon="el-icon-search"
            class="search-el-button"
          ></el-button>
        </el-input>
      </el-row>
      <el-button type="primary" @click="addItem">添加</el-button>
    </div>
    <div class="table-biao">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          label="日期"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="province"
          label="省份"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          width="100"
        >
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row)"
              type="text"
              size="small"
            >查看</el-button>
            <el-button
              type="text"
              size="small"
            >编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class='pagination'>
      <span>当前共 {{sumCount}} 条信息，当前 {{currPage}}/{{(Math.ceil(sumCount/pageSize)==0?1:Math.ceil(sumCount/pageSize))}}页</span>
      <p class="tablep">
        <hlvy-page
          :pageSize="pageSize"
          :sumCount="sumCount"
          :currPage="currPage"
          @handleSizeChange="handleSizeChange"
        ></hlvy-page>
      </p>
    </div>
   <hlvy-dia :isShow='isShow' @chanage="closeDia"> 1111111</hlvy-dia>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      name: '',
      pageSize: 5,
      sumCount: 100,
      currPage: 1,
      isShow: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }
      ]
    }
  },
  created() {},
  computed: {
    ...mapGetters({
      tableData: 'tableData'
    })
  },
  methods: {
    getData() {
      console.log(this.name)
    },
    addItem() {
      this.isShow = !this.isShow
    },
    closeDia() {
      console.log(1111111)
    },
    handleClick(row) {
      console.log(row)
    },
    handleSizeChange(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-input--suffix .el-input__inner {
  padding-right: 91px;
}
.table-biao {
  margin-top: 5%;
}
.pagination {
  display: flex;
  align-items: center;
}
.tablep {
  text-align: center;
  margin-top: 5px;
}
.table-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
