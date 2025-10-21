<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6"
  >
    <div class="bg-white shadow-lg rounded-2xl w-full max-w-md p-6">
      <h1 class="text-2xl font-bold text-center mb-6 text-blue-600">
        个人主页
      </h1>

      <div v-if="user" class="space-y-4">
        <div class="flex justify-between border-b pb-2">
          <span class="font-semibold">用户ID：</span>
          <span>{{ user.id }}</span>
        </div>
        <div class="flex justify-between border-b pb-2">
          <span class="font-semibold">用户名：</span>
          <span>{{ user.name }}</span>
        </div>
        <div class="flex justify-between border-b pb-2">
          <span class="font-semibold">手机号：</span>
          <span>{{ user.phone_number || "未绑定" }}</span>
        </div>
        <div class="flex justify-between border-b pb-2">
          <span class="font-semibold">邮箱：</span>
          <span>{{ user.email }}</span>
        </div>
      </div>

      <div v-else class="text-center text-gray-500">正在加载用户信息</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const user = ref(null);

onMounted(async () => {
  try {
    // 向你的后端接口发起请求
    const response = await axios.get(
      "http://localhost:8888/user/findByPhoneNumber",
      {
        params: { phoneNumber: "123321" },
      }
    );
    user.value = response.data;

    // 移除密码字段（安全考虑）
    delete user.value.password;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped>
body {
  font-family: "Microsoft YaHei", sans-serif;
}
</style>
