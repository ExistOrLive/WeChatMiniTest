// components/RepoListItem/RepoListItem.ts
Component({
  options: {
    // 虚拟化组件节点
    virtualHost: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    repoModel: {
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
    clickRepoAvatar() {
      const login = this.properties.repoModel.owner.login
      wx.navigateTo({
        url: "../../pages/user/user?login=" + login
      });
    },
    clickRepo() {
      const fullName = this.properties.repoModel.full_name
      wx.navigateTo({
        url: "../../pages/repo/repo?fullName=" + fullName
      }
      )
    }
  }
})
