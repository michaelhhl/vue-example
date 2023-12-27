<script setup lang="ts">
import Avatar from '@/assets/avatar.svg?component'

</script>
<template>
  <div class="h-screen w-screen">
    <el-container class="h-full">
      <el-header class="text-2xl bg-blue-300">
        <!-- Header -->
        <el-row class="min-h-full">
          <el-col :span="20" class="flex place-content-center line">Welcome to Admin System</el-col>
          <el-col :span="4" class="flex place-content-center self-center">
            <el-dropdown>
              <Avatar width="25" height="25"/>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Logout</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>

          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <nav-side />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.line{
  line-height: 60px;
}
</style>
