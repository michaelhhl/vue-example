<script setup lang="ts">
import type { LoginUser } from '@/api/loginApi'
import { login } from '@/api/loginApi'
import router from '@/router'
import { useUserInfo } from '@/stores/userinfo'
import { setToken } from '@/utils/userOp'
import bg from '@/assets/bg.png'

const loginUser = reactive<LoginUser>({
  username: '',
  password: '',
})

const onSubmit = () => {
  const ret = login(loginUser)
  ret.then((res) => {
    const { username, token } = res.data || {}
    useUserInfo().value.username = username || ''
    setToken(token || '')
    router.push('/')
  })
}
</script>

<template>
  <img :src="bg" class="wave">
  <div class="card m-3 justify-self-center ml-96">
    <h4 class="card-header bg-blue-400 text-2xl">
      Login
    </h4>
    <div class="card-body">
      <el-form label-position="top">
        <el-form-item label="Username">
          <el-input v-model="loginUser.username" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="loginUser.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">
            Login
          </el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
    min-width: 280px;
}
.card-header {
    padding:.75rem 1.25rem;
    margin-bottom:0;
    border-bottom:1px solid rgba(0,0,0,.125)
}
.card-body {
    -ms-flex:1 1 auto;
    flex:1 1 auto;
    min-height:1px;
    padding:1.25rem
}
.card-header:first-child {
    border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0
}
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
