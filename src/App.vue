<script setup lang="ts">
import { RouterView } from 'vue-router'
import { currentLocale } from './locales/i18n'
</script>

<template>
  <el-config-provider :locale="currentLocale">
    <RouterView />
  </el-config-provider>
</template>


