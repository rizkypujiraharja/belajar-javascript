<template>
  <div>{{ state.employees }}</div>
</template>

<script>
import { onMounted, reactive } from "vue";
import { db } from "./db";
export default {
  name: "App",
  setup() {
    const state = reactive({
      employees: [],
    });
    onMounted(() => {
      const employeesRef = db.ref("employees");
      employeesRef.on("value", function (data) {
        state.employees = data.val();
      });

      console.log(state);
    });

    return {
      state,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
