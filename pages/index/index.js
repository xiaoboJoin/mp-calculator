//index.js
//获取应用实例
import taxcal from "../../utils/taxCal.js"
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    income:100,
    city: {
      'title':"城市",
      'value':'北京',
    },
    shebao:{

    },
    gongjijin:{

    },
    yanglaobaoxian:{

    },
    yiliaobaoxian:{

    },
    shiyebaoxian:{

    },
    zhufanggongjijin:{

    },
    income: {

    },
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.getTax(7450);
    
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getTax:function(tax){
    this.setData({
      income:taxcal(tax).income,
    })

  },
  inputChanged: function (value) {
    console.log(value)
    // this.setData({
    //   tax:{
    //     title:"额度",
    //     value: value.detail.value,
    //   }
    // })
  },
  onTap:function(e){
    console.log(e)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
