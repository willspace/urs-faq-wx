Page({
    data:{},
    onLoad:function(){
        console.log("Home onLoad 页面加载")
    },
    onShow:function(){
        console.log("Home onShow 页面显示")
    },
    onReady:function(){
        console.log("Home onReady 页面初次渲染完成")
    },
    onHide:function(){
        console.log("Home onHide 页面隐藏")
    },
    onUnload:function(){
        console.log("Home onUnload 页面卸载")
    },
    onError:function(){
        console.log("Home onError")
    },
    onNavClick:function(event){
        var listId = event.currentTarget.dataset.listid;
        wx.navigateTo({
            url: "/pages/list/list?id=" + listId
        })
    },
    onFaqClick:function(event){
        // wx.showToast({
        //     title: '敬请期待',
        //     icon:'loading'
        // })

        wx.showModal({
        title: '提示',
        content: '敬请期待。。。',
        success: function(res) {
            if (res.confirm) {
                wx.showToast({
                    title: '期待',
                    duration: 2000
                })
            }else{
                wx.showToast({
                    title: '起开！',
                    icon:'loading',
                    duration: 500
                })
            }
        }
        })
    },
    onBeedbackClick:function(){
        wx.scanCode({
        success: (res) => {
            wx.showToast({
                title: '你真棒！'
            })
        },
        fail: (res) => {
            wx.showToast({
                title: '哈哈'
            })
        }
        })
    },
    onPullDownRefresh:function(){

        console.log("onPullDownRefresh 下拉动作")
                wx.showToast({
                    icon:'loading',
                    duration: 2000
                }),
                setTimeout(function(){
                    wx.stopPullDownRefresh();
                },2000);

    },
    onReachBottom:function(){
        console.log("onReachBottom 上拉触底事件")
    }
})