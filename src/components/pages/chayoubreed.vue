<template>
  <div>
    <v-maintitle></v-maintitle>
    <div class="datafilter">
      <div class="top">数据筛选</div>
      <div class="from">1111</div>
    </div>
    <div class="content">
      <div class="top">
        <span>数据列表</span>
        <div>
          <el-button type="primary" size="small" icon="el-icon-download">导入</el-button>
          <el-button type="primary" size="small" icon="el-icon-upload2">导出</el-button>
          <el-button type="primary" size="small" icon="el-icon-plus">添加</el-button>
        </div>
      </div>
      <div class="datatabel">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="province" label="省份" width="120"></el-table-column>
          <el-table-column prop="city" label="市区" width="120"></el-table-column>
          <el-table-column prop="address" label="地址" width="300"></el-table-column>
          <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import vMaintitle from "@/components/main/MainTitle";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },
  components: {
    vMaintitle,
  },
};
</script>

<style lang="less" scoped>
.datafilter {
  width: 90%;
  background: #fff;
  border: 1px solid #ccc;
  margin: 30px auto;

  .top {
    color: #666;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    font-weight: 700;
  }
  .from {
    padding: 10px;
  }
}
.content {
  width: 90%;
  background: #fff;
  margin: 30px auto;
  border: 1px solid #ccc;
  .top {
    color: #666;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
  }
  .datatabel {
  }
}
</style>