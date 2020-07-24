<template>
  <div class="navbar">
    <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      text-color="#666666"
      router
      >
      <el-submenu v-for="item in navbar" :index="item.index" :key="item.index">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{ item.barname }}</span>
        </template>
        <el-menu-item-group v-if="item.children">
          <el-menu-item v-for="item in item.children" :index="item.index" :key="item.index">{{ item.chilname }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
  </div>
</template>

<script>
export default {
    data(){
        return{
            navbar:[
                {
                    barname:"种植资源管理",
                    index:"1",
                    children:[
                        {
                            index:"/home/chayoubreed",
                            chilname:"油茶品种信息维护"
                        }
                    ]
                },
                {
                    barname:"主体信息管理",
                    index:"2",
                    children:[
                        {
                            index:"/home/plantbody",
                            chilname:"种植主体信息维护"
                        },
                        {
                            index:"/home/seedlingcompany",
                            chilname:"种苗企业信息维护"
                        },
                        {
                            index:"/home/farmingproperty",
                            chilname:"农资企业信息维护"
                        },
                        {
                            index:"/home/farmingmachine",
                            chilname:"农机企业信息维护"
                        },
                        {
                            index:"/home/farmingskill",
                            chilname:"农技企业信息维护"
                        },
                        {
                            index:"/home/process",
                            chilname:"精深加工企业维护"
                        },
                        {
                            index:"/home/detection",
                            chilname:"检测机构信息维护"
                        },
                        {
                            index:"/home/supervise",
                            chilname:"监管部门信息维护"
                        },
                    ]
                },
                {
                    barname:"品牌目录管理",
                    index:"3",
                    children:[
                        {
                            index:"/home/chayoubrand",
                            chilname:"茶油品牌信息维护"
                        }
                    ]
                }
            ]
        }
    }
};
</script>

<style lang="less" scoped>
.navbar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  // overflow-y: scroll;
  background: #ffffff;
  width: 250px;
  font-weight: 700;
  border-right: 1px solid #cccccc;
  .el-col{
      width: 100%;
      .el-menu{
          border: none;
      }
  }
}
</style>