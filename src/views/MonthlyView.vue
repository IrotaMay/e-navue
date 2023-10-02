<script setup lang="ts">
const monthlyAttendance = {
  id: 1,
  user_id: 1,
  month: 10,
  attendance_amount: 1,
  abcence_amount: 0,
  paid_off_amount: 0,
  holiday_work_amount: 0,
  tardiness_amount: 0,
  basic_work_amount: 8,
  over_time_amount: 0,
}
</script>

<template>
  <div class="basic-table">
    <table>
      <thead>
        <tr>
          <th colspan="2">設定</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>締日</th>
          <td class="c-date">
            <select name="year" id="year">
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
            <span>年</span>
            <select name="month" id="month">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3" selected>3</option>
              <option value="4">4</option>
            </select>
            <span>月末日</span>
            <span>&lt;&lt;</span>
            <span>&gt;&gt;</span>
          </td>
        </tr>
        <tr>
          <th>期間</th>
          <td>2023/09/01～2023/09/30</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th colspan="4">勤怠データ確認</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>出勤</th>
          <td>{{ monthlyAttendance.attendance_amount }}</td>
          <th>基本</th>
          <td>{{ monthlyAttendance.basic_work_amount }}</td>
        </tr>
        <tr>
          <th>欠勤</th>
          <td>{{ monthlyAttendance.abcence_amount }}</td>
          <th>残業</th>
          <td>{{ monthlyAttendance.over_time_amount }}</td>
        </tr>
        <tr>
          <th>休出</th>
          <td>{{ monthlyAttendance.holiday_work_amount }}</td>
          <th>遅早</th>
          <td>{{ monthlyAttendance.tardiness_amount }}</td>
        </tr>
        <tr>
          <th>有給</th>
          <td>{{ monthlyAttendance.paid_off_amount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
  .c-date {
    display: flexbox;
    border: none;
  }

  .basic-table {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    gap: 2rem;
  }

  table {
    border-collapse: collapse;
    border: 1px solid #333;
    width: 400px;
  }

  th {
    background-color: #eee;
    color: #333;
    border: 1px solid #333;
  }

  td {
    background-color: #fff;
    border: 1px solid #333;
    text-align: center;
  }
</style>
