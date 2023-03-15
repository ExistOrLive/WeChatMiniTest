// pages/search.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchKey:"",
    repoList: [Object],
    page: 1
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
      console.log("123");
      this.requestSearch(this.data.searchKey,true)    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  searchClick: function () {
    console.log(this.data)
    this.requestSearch(this.data.searchKey,false)
  },

  searchKeyChange: function (e) {
    this.data.searchKey = e.detail.value
  },

  clickAvatar: function (e: object) {
    const login = e.target.dataset.ownerlogin
    
    wx.navigateTo({
      url: "../user/user?login="+login
    }
    )
  },

  requestSearch(searchKey: String, loadnextpage: boolean) {
    const $this = this 
    var currentpage =loadnextpage ? this.data.page+1: 1
    
    wx.request({
      url: "https://gitee.com/api/v5/search/repositories",
      data: {
        q: searchKey,
        page: currentpage,
        per_page: 5,
        order: "desc",
        access_token:"65bb461760a9cd54f9b4ca3b425b4f94"
        
      },
      header: {
        "content-type": "application/json;charset=UTF-8"
      },
      success(res) { [this]
        $this.setData({page:currentpage})
        if (loadnextpage){
          var currentpagedata =$this.data.repoList
          console.log(res.data)
          currentpagedata =currentpagedata.concat(res.data)
          $this.setData({repoList: currentpagedata})
        }else{
          $this.setData({repoList: res.data})
        }
        
      },
      fail(e) {
        console.log(e)
      }

    })
  }
})