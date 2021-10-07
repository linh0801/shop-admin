<template>
  <div class="container">
    <h1>登录</h1>
    <img :src="logoImg">
  </div>
</template>

<script setup lang="ts">
import { getLonginInfo } from '@/api/common'
import { onMounted } from '@vue/runtime-core'
import { ref } from 'vue'
import { ILoginInfo } from '@/api/types/common'

const list = ref<ILoginInfo['slide']>([])
const logoImg = ref<ILoginInfo['login_logo']>('')
onMounted(() => {
  getLonginInfo().then((data) => {
    list.value = data.slide
    logoImg.value = data.login_logo
    console.log(list.value)
  })
})

</script>

<style scoped lang="scss">

</style>
