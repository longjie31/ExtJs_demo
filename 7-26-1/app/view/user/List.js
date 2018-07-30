Ext.define('AM.view.user.List',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',
    title: '所有用户',
    store: 'Users',
    initComponent: function(){
        /*this.store = {
            fields: ['name','email'],
            data: [
                {name: '张三',    email: 'ed@sencha.com'},
                {name: '李四', email: 'tommy@sencha.com'}
            ]
        };*/
        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];
        this.callParent(arguments);
    }
});