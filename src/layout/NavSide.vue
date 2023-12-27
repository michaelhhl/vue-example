<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import {
  Menu as IconMenu,
  Location,
} from '@element-plus/icons-vue'

const { t } = useI18n()
const handleOpen = (key: string, keyPath: string[]) => {
  console.info(key, keyPath)
}

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    router
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="/departmentAdmin">
      <el-icon><Location /></el-icon>
      <template #title>
        {{ t('menu.department') }}
      </template>
    </el-menu-item>
    <el-menu-item index="/roleAdmin">
      <el-icon><IconMenu /></el-icon>
      <template #title>
        {{ t('menu.role') }}
      </template>
    </el-menu-item>
  </el-menu>
</template>

  <style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  </style>

