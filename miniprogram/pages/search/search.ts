
var giteeAPI = require("../../request/gitee-api")
// pages/search.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchKey: "",
    currentInput: "",
    list: [],
    page: 1,
    searchType: "repo"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  typeClick(e) {
    this.setData({page: 1})
    this.setData({list: []})
    this.setData({searchType: e.target.id})
    this.searchClick()
  },

  searchClick: function() {
    const currentSearchKey: String = this.data.currentInput
    if (currentSearchKey.length == 0) {
      wx.showToast({ // 显示Toast
        title: '请输入关键字',
        duration: 1500
      })
    } else {
      this.setData({ searchKey: currentSearchKey })

      switch(this.data.searchType) {
        case "repo":
          this.requestSearchRepos(currentSearchKey, false)
          break
        case "user":
          this.requestSearchUsers(currentSearchKey, false)
          break
        case "issue":
          this.requestSearchIssues(currentSearchKey, false)
          break 
      }
      
    }
  },

  loadMoreData: function () {
    switch(this.data.searchType) {
      case "repo":
        this.requestSearchRepos(this.data.searchKey, true)
        break 
      case "user":
        this.requestSearchUsers(this.data.searchKey, true)
        break 
      case "issue":
        this.requestSearchIssues(this.data.searchKey, true)
        break 
    }
    
  },

  searchKeyChange: function (e) {
    this.setData({ currentInput: e.detail.value })
  },

  clickRepoAvatar: function (e: object) {
    const login = e.currentTarget.dataset.ownerlogin

    wx.navigateTo({
      url: "../user/user?login=" + login
    }
    )
  },

  clickRepo: function (e) {
    const fullName = e.currentTarget.dataset.fullname
    wx.navigateTo({
      url: "../repo/repo?fullName=" + fullName
    }
    )
  },
  

  requestSearchRepos(searchKey: String, loadnextpage: boolean) {
    const $this = this
    var currentpage = loadnextpage ? this.data.page + 1 : 1

    giteeAPI.requestSearchRepos(searchKey,
      currentpage,
      function (res) { 
        $this.setData({ page: currentpage })
        if (loadnextpage) {
          var currentpagedata = $this.data.list
          console.log(res)
          currentpagedata = currentpagedata.concat(res)
          $this.setData({ list: currentpagedata })
        } else {
          $this.setData({ list: res })
        }
      },
      function (e) {
        console.log(e)
        wx.showToast({ // 显示Toast
          title: e,
          duration: 1500
        })
      }
    )
  },

  requestSearchUsers(searchKey: String, loadnextpage: boolean) {
    const $this = this
    var currentpage = loadnextpage ? this.data.page + 1 : 1

    giteeAPI.requestSearchUsers(searchKey,
      currentpage,
      function (res) { 
        $this.setData({ page: currentpage })
        if (loadnextpage) {
          var currentpagedata = $this.data.list
          console.log(res)
          currentpagedata = currentpagedata.concat(res)
          $this.setData({ list: currentpagedata })
        } else {
          $this.setData({ list: res })
        }
      },
      function (e) {
        console.log(e)
        wx.showToast({ // 显示Toast
          title: e,
          duration: 1500
        })
      }
    )
  },

  requestSearchIssues(searchKey: String, loadnextpage: boolean) {
    const $this = this
    var currentpage = loadnextpage ? this.data.page + 1 : 1

    giteeAPI.requestSearchIssues(searchKey,
      currentpage,
      function (res) { 
        $this.setData({ page: currentpage })
        if (loadnextpage) {
          var currentpagedata = $this.data.list
          console.log(res)
          currentpagedata = currentpagedata.concat(res)
          $this.setData({ list: currentpagedata })
        } else {
          $this.setData({ list: res })
        }
      },
      function (e) {
        console.log(e)
        wx.showToast({ // 显示Toast
          title: e,
          duration: 1500
        })
      }
    )
  }
})