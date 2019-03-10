<template>
<div>
    <el-container class="index-container">
        <el-header class="index-header">
            <el-row>
                <el-col :span="4"><div class="grid-content bg-purple"><img src="../assets/logo.png" alt=""></div></el-col>
                <el-col :span="16" class="header-center"><div class="grid-content bg-purple-light">电商后台管理</div></el-col>
                <el-col :span="4" class="header-right"><div class="grid-content bg-purple"><el-button type="primary" icon="el-icon-arrow-right">退出</el-button></div></el-col>
            </el-row>
        </el-header>  
    <el-container class="el-container">
        <el-aside class="index-aside" width="200px">
            <!-- 下拉导航 -->
            <el-row class="tac">
        <el-col :span="24">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>用户管理</span>
                    </template>
                <el-menu-item-group>
                    <el-menu-item index="1"><i class="el-icon-menu"></i>用户列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户管理</span>
                </template>
                <el-menu-item-group>
                <el-menu-item index="1"><i class="el-icon-menu"></i>用户列表</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户管理</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1"><i class="el-icon-menu"></i>用户列表</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户管理</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1"><i class="el-icon-menu"></i>用户列表</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
        </el-col>
        </el-row>
        </el-aside>
        <el-main class="index-main">Main</el-main>
        </el-container>
    </el-container>
</div>

</template>

<script>
export default {
    methods: {
        // 导航
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    
    
}
</script>

<style>
    body >div:first-of-type{
        height: 100%;
    }
    .index-container{
        height: 100%;
    }
    .index-header {
        height: 60px;
        background-color: #b3c0d1;
        line-height: 60px;
    }
    .header-center{
        text-align: center;
        font-size: 30px;
        color:#fff;
        font-weight: 700;
    }

    .header-right {
        text-align: right;
    }

    .el-container{
        height: 100%;
    }

    .index-aside{}
    .index-main{
        background-color: #e9eef3;
               
    }
    
</style>
