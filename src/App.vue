<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const user = {
  id: 1,
  name: '山田太郎',
}
</script>

<template>
  <header>
    <div class="logo">
      <RouterLink to="/">e-naVue</RouterLink>
    </div>

    <div class="wrapper">
      <nav>
        <RouterLink to="/daily">日時勤怠</RouterLink>
        <RouterLink to="/monthly">月次勤怠</RouterLink>
        <RouterLink to="/option">各種設定</RouterLink>
        <RouterLink to="/login">ログアウト</RouterLink>
      </nav>
    </div>

  </header>
  
  <div class="user">
  {{ user.name }} さん （ {{ user.id }} ）
  </div>
  <RouterView />
</template>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff ;
}

.wrapper {
  display: flex;
  justify-content: flex-end;
}

nav {
  display: flex;
  gap: 1rem;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

.user {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  border: 1px solid #333;
  padding: 0.5rem 1rem;
  width: 80%;
  margin: 20px auto;
}
</style>
