// components/UserListItem/UserListItem.ts
Component({
  options: {
    // 虚拟化组件节点
    virtualHost: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    userModel: {
      type: Object,
      value: undefined
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickUser() {
      const login = this.properties.userModel.login
      wx.navigateTo({
        url: "../../pages/user/user?login=" + login
      });
    }
  }
})
