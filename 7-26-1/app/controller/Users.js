Ext.define('AM.controller.Users',{
    extend: 'Ext.app.Controller',
    stores: [
        'Users'
    ],
    models: ['User'],
    views: [
        'user.List',
        'user.Edit'
    ],
    init: function(){
        console.log('Initialized Users!This happens before the Application launch function is called');
        console.log('用户初始化完毕！这是在app调用launch函数之前发生的。');
        this.control({
            /*'viewport　> panel': {
                render: this.onPanelRendered
            }*/
            'userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });
    },
    /*onPanelRendered: function(){
        console.log('The panel was rendered');
        console.log('面板已被渲染')
    }*/
    editUser: function(grid, record){
        console.log('Doubel clicked on '+record.get('name'));
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);
    },
    updateUser: function(button){
        console.log('点击了保存按钮');
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        record.set(values);
        win.close();
    }
});