
// 搜索仓库
function requestSearchRepos(searchKey: String,
  page: Number,
  success: Function,
  fail: Function) {
  wx.request({
    url: "https://gitee.com/api/v5/search/repositories",
    data: {
      q: searchKey,
      page: page,
      per_page: 10,
      order: "desc",
      access_token: "65bb461760a9cd54f9b4ca3b425b4f94"
    },
    header: {
      "content-type": "application/json;charset=UTF-8"
    },
    success(res) {
      console.log(res)
      if (res.statusCode >= 200 && res.statusCode < 300) {
        success(res.data)
      } else {
        fail(res.data.messages[0])
      }
    },
    fail(e) {
      console.log(e)
      fail(e)
    }

  })
}

// 搜索user
function requestSearchUsers(searchKey: String,
  page: Number,
  success: Function,
  fail: Function) {
  wx.request({
    url: "https://gitee.com/api/v5/search/users",
    data: {
      q: searchKey,
      page: page,
      per_page: 10,
      order: "desc",
      access_token: "65bb461760a9cd54f9b4ca3b425b4f94"
    },
    header: {
      "content-type": "application/json;charset=UTF-8"
    },
    success(res) {
      console.log(res)
      if (res.statusCode >= 200 && res.statusCode < 300) {
        success(res.data)
      } else {
        fail(res.data.messages[0])
      }
    },
    fail(e) {
      console.log(e)
      fail(e)
    }

  })
}


// 搜索issue
function requestSearchIssues(searchKey: String,
  page: Number,
  success: Function,
  fail: Function) {
  wx.request({
    url: "https://gitee.com/api/v5/search/issues",
    data: {
      q: searchKey,
      page: page,
      per_page: 10,
      order: "desc",
      access_token: "65bb461760a9cd54f9b4ca3b425b4f94"
    },
    header: {
      "content-type": "application/json;charset=UTF-8"
    },
    success(res) {
      console.log(res)
      if (res.statusCode >= 200 && res.statusCode < 300) {
        success(res.data)
      } else {
        fail(res.data.messages[0])
      }
    },
    fail(e) {
      console.log(e)
      fail(e)
    }

  })
}

function requestRepoInfo(fullName: String, success: Function, fail: Function) {
  wx.request({
    url: `https://gitee.com/api/v5/repos/${fullName}`,
    data: {
      access_token: "65bb461760a9cd54f9b4ca3b425b4f94"
    },
    header: {
      "content-type": "application/json;charset=UTF-8"
    },
    success(res) {
      console.log(res)
      if (res.statusCode >= 200 && res.statusCode < 300) {
        success(res.data)
      } else {
        fail(res.data.messages[0])
      }
    },
    fail(e) {
      console.log(e)
      fail(e)
    }

  })
}

module.exports = {
  requestSearchRepos: requestSearchRepos,
  requestSearchUsers: requestSearchUsers,
  requestSearchIssues: requestSearchIssues,
  requestRepoInfo: requestRepoInfo
}