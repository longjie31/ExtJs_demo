Ext.define('AM.controller.Users',{
    extend: 'Ext.app.Controller',
    views: [
        'user.List'
    ],
    init: function(){
        console.log('Initialized Users!This happens before the Application launch function is called');
        console.log('用户初始化完毕！这是在app调用launch函数之前发生的。');
        this.control({
            'viewport　> panel': {
                render: this.onPanelRendered
            }
        });
    },
    onPanelRendered: function(){
        console.log('The panel was rendered');
        console.log('面板已被渲染')
    }
});