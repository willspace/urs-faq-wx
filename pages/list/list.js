var faqListData = require('../../data/data-faq-list.js')

Page({
    data:{
        pageKey:""
    },
    onLoad:function(option){
        console.log("List onLoad 页面加载");
        var pageId = option.id;
        this.setData({
            pageKey:pageId,
            faqListData:faqListData.dataList
        });
    },
    onShow:function(){
        console.log("List onShow 页面显示")
    },
    onReady:function(){
        console.log("List onReady 页面初次渲染完成")
    },
    onHide:function(){
        console.log("List onHide 页面隐藏")
    },
    onUnload:function(){
        console.log("List onUnload 页面卸载")
    },
    onError:function(){
        console.log("List onError")
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
    }
});