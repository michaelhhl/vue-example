<script lang="ts" setup>

export interface Role {
  roleId: string
  roleName?: string
}

const roleList = ref<Role[]>([{
  roleId: '1',
  roleName: 'Super Admin'
}, {
  roleId: '2',
  roleName: 'Security Admin'
}, {
  roleId: '3',
  roleName: 'Project Admin'
}, {
  roleId: '4',
  roleName: 'User'
}])

const handleClick = () => {
  ElMessage({
    message: 'The system is constructing...',
    type: 'warning',
  })
}

</script>

<template>
  <el-table :data="roleList" stripe style="width: 100%">
    <el-table-column prop="roleId" label="Role Id" />
    <el-table-column prop="roleName" label="Role Name" />
    <el-table-column fixed="right" label="Operations" width="260">
        <template #default>
          <el-button type="primary" @click="handleClick">Detail</el-button>
          <el-button type="primary" @click="handleClick">Edit</el-button>
          <el-button type="danger" @click="handleClick">Remove</el-button>
        </template>
      </el-table-column>
  </el-table>
</template>
