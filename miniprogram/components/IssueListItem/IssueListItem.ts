// components/IssueListItem/IssueListItem.ts
Component({

  options: {
    // 虚拟化组件节点
    virtualHost: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    issueModel: {
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
    clickRepo(e) {
      console.log(e)
      console.log(typeof e)
    },
    clickIssue(e) {
      // console.log(e)
    }
  }
})
