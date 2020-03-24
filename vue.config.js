module.exports = {
  configureWebpack: {
    devServer: {
      // mock接口编写的地方
      before(app) {
        // 用户信息池
        let userpoor = [
          { username: "admin", password: "123456" },
          { username: "shabi", password: "123456" }
        ];
        // 注册接口
        app("/api/register", (req, res) => {
          const { username, password } = req.query;
          const userlength = userpoor.filter(v => v.username == username)
            .length;
          if (userlength > 0) {
            res.json({
              success: false,
              message: "用户名已存在"
            });
          } else {
            res.json({
              success: true,
              message: "注册成功"
            });
          }
        });
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true
    }
  }
};
