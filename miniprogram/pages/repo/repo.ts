// pages/repo/repo.ts
import { requestRepoInfo } from "../../request/gitee-api"
import { formatTime } from "../../utils/util"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    fullName: "",
    repoInfo: null,
    repoCreateAt: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(option) {
    this.setData({fullName: option.fullName})
    this.getRepoInfo() 
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

  getRepoInfo() {
    const $this = this;
    requestRepoInfo(
      this.data.fullName,
      function( repoInfo ) {
        $this.setData({"repoInfo": repoInfo})
        const repoCreateAt = formatTime(new Date(repoInfo.created_at))
        $this.setData({"repoCreateAt":repoCreateAt})
      },
      function( e ) {
        console.log(e)
        wx.showToast({ // 显示Toast
          title: e,
          duration: 1500
        })
      }
    )
  }

})