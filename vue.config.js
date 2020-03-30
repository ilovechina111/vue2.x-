module.exports = {
  configureWebpack: {
    devServer: {
      open: true,
      // mock接口编写的地方
      before(app) {
        // 用户信息池
        let userpoor = [
          { username: "shabi", password: "123456" },
          { username: "admin", password: "123456" }
        ];
        // 注册接口
        app.get("/api/register", (req, res) => {
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
        // 登录接口
        let tokenkey = "jiege";
        app.get("/api/login", (req, res) => {
          const { username, password } = req.query;
          if (
            (username == "jiege" && password == "123456") ||
            (username == "niubi" && password == "123456")
          ) {
            res.json({
              code: 0,
              message: "登录成功",
              token:
                tokenkey +
                "-" +
                username +
                "-" +
                (new Date().getDate() + 60 * 60 * 1000)
            });
          } else {
            res.json({
              code: 1,
              message: "账号或密码错误"
            });
          }
        });
        //  首页轮播图数据接口
        app.get("/api/banner", (req, res) => {
          res.json({
            data: [
              {
                url: "https://m.xdclass.net",
                image:
                  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1060397884,3059994922&fm=26&gp=0.jpg"
              },
              {
                url: "https://m.xdclass.net",
                image:
                  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1060397884,3059994922&fm=26&gp=0.jpg"
              },
              {
                url: "https://m.xdclass.net",
                image:
                  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1060397884,3059994922&fm=26&gp=0.jpg"
              }
            ]
          });
        });
        // 滚动分类接口
        app.get("/api/rollinglist", (req, res) => {
          res.json({
            data: [
              [
                {
                  url: "https://m.xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.allyuncs.com/xdclass_pro/banner/1901/learn.png",
                  label: "分类一"
                },
                {
                  url: "https://m.xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.allyuncs.com/xdclass_pro/banner/1901/learn.png",
                  label: "分类一"
                },
                {
                  url: "https://m.xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.allyuncs.com/xdclass_pro/banner/1901/learn.png",
                  label: "分类一"
                },
                {
                  url: "https://m.xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.allyuncs.com/xdclass_pro/banner/1901/learn.png",
                  label: "分类一"
                }
              ],
              [
                {
                  url: "https://m.xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.allyuncs.com/xdclass_pro/banner/1901/learn.png",
                  label: "分类一"
                },
                {
                  url: "https://m.xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.allyuncs.com/xdclass_pro/banner/1901/learn.png",
                  label: "分类一"
                },
                {
                  url: "https://m.xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.allyuncs.com/xdclass_pro/banner/1901/learn.png",
                  label: "分类一"
                },
                {
                  url: "https://m.xdclass.net",
                  image:
                    "https://xd-video-pc-img.oss-cn-beijing.allyuncs.com/xdclass_pro/banner/1901/learn.png",
                  label: "分类一"
                }
              ]
            ]
          });
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
