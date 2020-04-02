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
                  "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/107839/10/10367/192629/5e7c8f70E41374ba3/7c00f506ecd911c9.jpg!cr_1125x445_0_171!q70.jpg.dpg"
              },
              {
                url: "https://m.xdclass.net",
                image:
                  "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/84879/39/15634/91880/5e748664Eb2d8a21e/5d459a617e64b872.jpg!cr_1125x445_0_171!q70.jpg.dpg"
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
                  url:
                    "https://h5.m.jd.com/babelDiy/Zeus/4JkCVz6z5RB4dBL7bZBwtGRiBLLw/index.html",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/84753/1/16651/5549/5e7d5f9eE492c3864/4b9963fe16fae211.png",
                  label: "京东超市"
                },
                {
                  url:
                    "https://pro.m.jd.com/mall/active/8tHNdJLcqwqhkLNA8hqwNRaNu5f/index.html",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/95626/6/16650/5992/5e7d5fdeE251a8742/d29fcc84ee0211f7.png",
                  label: "数码电器"
                },
                {
                  url:
                    "https://h5.m.jd.com/babelDiy/Zeus/28Lq4LbJDJcuMhNb9tQ6EcbZ8GTu/index.html",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/105719/14/16594/7294/5e7d605eE007a21e7/63392310fbb001a4.png",
                  label: "京东服饰"
                },
                {
                  url: "https://m.xdclass.net",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/105719/14/16594/7294/5e7d605eE007a21e7/63392310fbb001a4.png",
                  label: "京东生鲜"
                },
                {
                  url: "https://daojia.jd.com/html/index.html?channel=jdapp",
                  image:
                    "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1060397884,3059994922&fm=26&gp=0.jpg",
                  label: "京东到家"
                },
                {
                  url: "https://newcz.m.jd.com/",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/96542/9/16707/3569/5e7d62bcE5c4ee6a7/3bf6ac36ac9f17d9.png",
                  label: "充值缴费"
                },
                {
                  url:
                    "https://wqs.jd.com/pingou/index.shtml?ptag=138097.1.8&sceneval=2",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/86437/25/16675/6585/5e7d62e4E1095d733/d0d685ed0477d268.png",
                  label: "9.9元拼"
                },
                {
                  url: "https://coupon.m.jd.com/center/getCouponCenter.action",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/110232/17/10270/4813/5e7d6310E79c9cb8d/6786eed1b786c010.png",
                  label: "领券"
                },
                {
                  url:
                    "https://u.jr.jd.com/growing/reMoney/benefitsTwo/?t=1&jdjrfrom=chongdingxiang",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/96795/33/16662/4749/5e7d6385Ec31e4b29/f36c778122286405.png",
                  label: "赚钱"
                },
                {
                  url:
                    "https://plogin.m.jd.com/login/login?appid=300&returnurl=https%3A%2F%2Fwqlogin1.jd.com%2Fpassport%2FLoginRedirect%3Fstate%3D995586080%26returnurl%3Dhttps%253A%252F%252Fplus.m.jd.com%252Findex&source=wq_passport",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/97837/22/16281/7606/5e7d6411E0c0a91d6/93e0b359bfdf0239.png",
                  label: "PLUS会员"
                }
              ],
              [
                {
                  url:
                    "https://pro.m.jd.com/mall/active/3YvKJrc4e4WK7aZ46j3h5UMCvEn4/index.html",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/86956/10/16811/5922/5e7cc74dE219a3d8d/e4f7c68febc8b29a.png",
                  label: "京东国际"
                },
                {
                  url: "//zpsy.jd.com",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/108499/22/10229/4960/5e7cc7e3Ef0042744/e18bb8a5ee24049d.png",
                  label: "京东拍卖"
                },
                {
                  url:
                    "//pro.m.jd.com/mall/active/2aiozXgZK1PUVZA37WNq62KLtjcC/index.html",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/108831/16/10402/4901/5e7cc891Ec4a1e209/7ec6358526c83cda.png",
                  label: "唯品会"
                },

                {
                  url:
                    "//pro.m.jd.com/mall/active/3JAoyewPmdVBMeRWTBiHDdGH5M36/index.html",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/87813/33/16566/5552/5e7cc8deEddd6bcb5/9afe008178b12b2b.png",
                  label: "玩3C"
                },
                {
                  url:
                    "//pro.m.jd.com/mall/active/3d34Pm49obpjLEdhhagSZuM5QrwC/index.html",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/104372/23/16606/5314/5e7cc980E1b828146/d789952095cd80b9.png",
                  label: "沃尔玛"
                },
                {
                  url:
                    "//pro.m.jd.com/mall/active/2kmaPNrGDNYo1LKwYtRoaSmsgbj6/index.html",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/99304/34/16507/5170/5e7ccacaE08d0d35d/ea8a30610a682386.png",
                  label: "美妆馆"
                },
                {
                  url:
                    "//pro.m.jd.com/mall/active/4Fr34Vshk1ymvv9CBTysFkF36aYM/index.html",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/87481/10/16552/5320/5e7ccbc7Eb8454450/c8f70349dc66e093.png",
                  label: "京东旅行"
                },
                {
                  url:
                    "//pro.m.jd.com/mall/active/LHGZv1DrGkva1jNpUkKFuNFN6oo/index.html",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/88799/13/16665/5240/5e7d6448E42016d3c/77b343418a8a890d.png",
                  label: "拍拍二手"
                },
                {
                  url: "https://m.xdclass.net",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/107817/13/10442/6306/5e7cccc8E7f9d6c59/9e06aa68ba7ba0f0.png",
                  label: "物流查询"
                },
                {
                  url: "//m.jd.com/portal/app_center.shtml",
                  image:
                    "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/98535/20/16481/5760/5e7d646aE9b72c32e/8e063cfb6bad4654.png",
                  label: "全部"
                }
              ]
            ]
          });
        });
        //获取分类页的分类接口
        app.get("/api/classify", (req, res) => {
          switch (req.query.type) {
            case "0":
              res.json({
                data: [
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  },
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为"
                  },
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀"
                  },
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "雪梨手机"
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  },
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为"
                  },
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀"
                  },
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "雪梨手机"
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  },
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为"
                  },
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀"
                  },
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "雪梨手机"
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  },
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为"
                  },
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀"
                  },
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "雪梨手机"
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  },
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为"
                  },
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀"
                  },
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "雪梨手机"
                  }
                ]
              });
              break;
            case "1":
              res.json({
                data: [
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  }
                ]
              });
              break;
            case "2":
              res.json({
                data: [
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为"
                  },
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为"
                  },
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为"
                  },
                  {
                    image:
                      "//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
                    label: "华为"
                  }
                ]
              });
              break;
            case "3":
              res.json({
                data: [
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀"
                  },
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀"
                  },
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀"
                  },
                  {
                    image:
                      "//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
                    label: "荣耀"
                  }
                ]
              });
              break;
            case "4":
              res.json({
                data: [
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  }
                ]
              });
              break;
            case "5":
              res.json({
                data: [
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "雪梨手机"
                  },
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "雪梨手机"
                  },
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "雪梨手机"
                  },
                  {
                    image:
                      "//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
                    label: "雪梨手机"
                  }
                ]
              });
              break;
            case "6":
              res.json({
                data: [
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  },
                  {
                    image:
                      "//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
                    label: "小米"
                  }
                ]
              });
              break;
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
