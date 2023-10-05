<script setup lang="ts">
import { ref } from 'vue'

const dailyAttendance = {
  id: 1,
  user_id: 1,
  date: '2021-01-01',
  state_id: 4,
  attendance_id: 1,
  punch_in: '9:00',
  punch_out: '18:00',
  break_time: 1,
  work_hour: 8,
  tardiness_id: 1,
  comment: 'コメント'
}

const pickerDate = dailyAttendance.date.split('-')

const attendance = ref(dailyAttendance)
const picker = ref(pickerDate)

const states = [
  { id: 1, name: '未入力' },
  { id: 2, name: '入力済' },
  { id: 3, name: '依頼中' },
  { id: 4, name: '承認済' }
]

const nowState = states.find((state) => state.id === attendance.value.state_id)

const attendances = [
  { id: 1, name: '出勤' },
  { id: 2, name: '有給' },
  { id: 3, name: '半休' },
  { id: 4, name: '慶弔休' },
  { id: 5, name: '欠勤' },
  { id: 6, name: '休日出勤' }
]

const nowAttendance = attendances.find(
  (attendance) => attendance.id === dailyAttendance.attendance_id
)

const nowAttendanceName = ref(nowAttendance?.name)

const tardinesses = [
  { id: 1, name: 'なし' },
  { id: 2, name: '電車遅延' },
  { id: 3, name: '自己都合' },
  { id: 4, name: 'その他' }
]

const formatDate = (d: string[] | string) => {
  if (Array.isArray(d)) {
    const [year, month, day] = d
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  }
  const nowDate = new Date(d)
  const year = nowDate.getFullYear()
  const month = String(nowDate.getMonth() + 1).padStart(2, '0')
  const day = String(nowDate.getDate()).padStart(2, '0')
  attendance.value.date = `${year}-${month}-${day}`
  console.log(attendance.value.date)
}
</script>

<template>
  <div class="container">
    <div>
      <v-text-field label="対象日" v-model="attendance.date" readonly></v-text-field>
      <v-date-picker
        color="black"
        v-model="picker"
        @update:model-value="formatDate(picker)"
      ></v-date-picker>
    </div>
    <table>
      <thead>
        <tr>
          <th colspan="4">勤怠入力</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>対象日</th>
          <td colspan="3">{{ dailyAttendance.date }}</td>
        </tr>
        <tr>
          <th>状態</th>
          <td colspan="3">{{ nowState?.name }}</td>
        </tr>
        <tr>
          <th>出欠</th>
          <td colspan="3">
            <v-select
              :items="attendances.map((attendance) => attendance.name)"
              v-model="nowAttendanceName"
            ></v-select>
          </td>
        </tr>
        <tr>
          <th>就業時刻</th>
          <td>{{ dailyAttendance.punch_in }} ~ {{ dailyAttendance.punch_out }}</td>
          <th>理由</th>
          <td class="tardiness">
            <label
              v-for="tardiness in tardinesses"
              :key="`tardiness-${tardiness.id}`"
              :for="`tardiness-${tardiness.id}`"
            >
              <input
                type="radio"
                :key="`tardiness-${tardiness.id}`"
                :id="`tardiness-${tardiness.id}`"
                :value="tardiness.id"
                :checked="tardiness.id === dailyAttendance.tardiness_id"
                v-model="attendance.tardiness_id"
              />
              {{ tardiness.name }}
            </label>
          </td>
        </tr>
        <tr>
          <th>休憩時間</th>
          <td colspan="3">{{ dailyAttendance.break_time }}</td>
        </tr>
        <tr>
          <th>コメント</th>
          <td colspan="3">
            <v-text-field
              v-model="attendance.comment"
              placeholder="コメントを入力してください"
              outlined
              dense
              rows="1"
              max-rows="3"
              clearable
            ></v-text-field>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.container {
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 20px;
  margin: 20px;
}

.tardiness {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 10px;
  border: none;
}
</style>
