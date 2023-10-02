<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';



const dateRef = ref("")
const timeRef = ref("")

const getDate = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1
  const date = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate()
  const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土']
  const day = now.getDay()
  const hours = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()
  const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
  const seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds()

  const dateStr = `${year}/${month}/${date}（${dayOfWeek[day]}）`
  const timeStr = `${hours}:${minutes}:${seconds}`

  dateRef.value = dateStr
  timeRef.value = timeStr
}

onMounted(() => {
  setInterval(() => {
    getDate()
  }, 1000)
})

</script>

<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th colspan="4" class="table-head">有給休暇</th>
        </tr>
        <tr>
          <th></th>
          <th>残日数</th>
          <th>付与日数</th>
          <th>取得日数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>有給休暇</th>
          <td>8.0日</td>
          <td>14.0日</td>
          <td>6.0日</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="content">
    <div class="date-wrapper">
      <div class="date-header">
        現在時刻
      </div>
      <div class="date">
        {{ dateRef }}
      </div>
      <div class="time">
        {{ timeRef }}
      </div>
    </div>
  
    <div class="link">
      <RouterLink to="/daily">>> 日時勤怠の入力</RouterLink>
      <RouterLink to="/monthly">>> 月次勤怠の確認</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.table-wrapper {
  width: 80%;
  margin: 0 auto;
  border: 1px solid #333;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
}

.table-head {
  text-align: start;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #f5f5f5;
  color: #000;
}

th {
  background-color: #333;
  border: 1px solid #fff;
  color: #fff;
  padding: 0.5rem 1rem;
}

td {
  background-color: #eee;
  border: 1px solid #fff;
  padding: 0.5rem 1rem;
  text-align: end;
}

.content {
  display: flex;
  width: 80%;
  gap: 1rem;
  margin: 20px auto;
  padding: 0.5rem 1rem;
  justify-content: space-around;
  align-items: center;
}

.date-wrapper {
  width: 400px;
  border: 1px solid #333;
}

.date-header {
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #f5f5f5;
  color: #000;
  border-bottom: 1px solid #333;
  padding: 0.5rem 1rem;
}

.date {
  font-size: 2.0rem;
  text-align: center;
  color: #333;
  height: 60px;
  padding: 0.5rem 0.5rem;
  margin: 0 auto;
  border-bottom: 4px solid #333;
}

.time {
  font-size: 2.0rem;
  text-align: center;
  color: #333;
  height: 60px;
  padding: 0.5rem 0.5rem;
  margin: 0 auto;
}

.link {
  display: flex;
  flex-direction: column;
}

a {
  font-size: 2.0rem;
  color: #333;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: #666;
}
</style>
