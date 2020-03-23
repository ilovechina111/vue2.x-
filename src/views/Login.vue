<template>
  <div>
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      schema: {
          fields: [
            {
              type: "input",
              modelKey: "username",
              label: "用户名",
              props: {
                placeholder: "请输入用户名"
              },
              rule: {
                // 校验规则
                required: true,
                type: "string",
                min: 3,
                max: 15
              },
              trigger: "blur",
              messages: {
                required: "用户名不能为空",
                min: "用户名不能少于3个字符",
                max: "用户名不能大于15个字符"
              }
            }
          ]
        }
    };
  }
  ,
  methods:{
      submitHandler(){},
  }
};
</script>
<style lang="less" scoped>
</style>