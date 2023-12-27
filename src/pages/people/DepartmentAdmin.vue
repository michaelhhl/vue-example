<script lang="ts" setup>
import type { Department } from '@/api/departmentApi'
import { selectAllDemparment } from '@/api/departmentApi'
import { formatDate } from '@/utils/format'

const departmentList = ref<Department[]>([])

const getDepartments = async () => {
  const ret = await selectAllDemparment()
  ret.data?.forEach((element) => {
    element.createTime = formatDate(element.createTime as string, 'YYYY-MM-DD hh:mm:ss') as string
    element.updateTime = formatDate(element.updateTime as string, 'YYYY-MM-DD hh:mm:ss') as string
  })
  departmentList.value = ret?.data || []
}

onBeforeMount(() => {
  getDepartments()
})
</script>

<template>
  <el-table :data="departmentList" stripe style="width: 100%">
    <el-table-column prop="deptId" label="Dept Id" />
    <el-table-column prop="deptname" label="Dept Name" />
    <el-table-column prop="creator" label="Creator" />
    <el-table-column prop="createTime" label="Create Time" />
    <el-table-column prop="updater" label="Updater" />
    <el-table-column prop="updateTime" label="Update Time" />
  </el-table>
</template>
