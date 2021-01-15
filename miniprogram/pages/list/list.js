// pages/list/list.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    normalbook:[],
    listbook:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let page = this;
    db.collection('normalbook').where({}).get({
      success:res=>{
        page.setData({normalbook:page.data.normalbook.concat(res.data)});
        console.info(page.data.normalbook);
      }
    })
  },
  //点击词单或者词书界面
  listbtn:function(e){
    let id = e.currentTarget.id;
    let page = this;
    //如果是点击的当前界面则不跳转
    if(page.data.current==id){
      return;
    }
    page.setData({current:id});
  },
  //左右滑动页面
  change:function(e){
    this.setData({current:e.detail.current})
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})