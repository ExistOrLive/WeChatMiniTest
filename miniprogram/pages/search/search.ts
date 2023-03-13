// pages/search.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchKey:"",
    repoList: [Object]
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

  searchClick: function () {
    console.log(this.data.searchKey)
    this.requestSearch(this.data.searchKey)
  },

  searchKeyChange: function (e) {
    this.data.searchKey = e.detail.value
  },

  requestSearch(searchKey: String) {
    const $this = this 
    wx.request({
      url: "https://gitee.com/api/v5/search/repositories",
      data: {
        q: searchKey,
        page: 1,
        per_page: 20,
        order: "desc"
      },
      header: {
        "content-type": "application/json;charset=UTF-8"
      },
      success(res) { [this]
        console.log(res.data)
        $this.setData({repoList: res.data})
      },
      fail(e) {
        console.log(e)
      }

    })
  }
})