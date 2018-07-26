Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',
    appFolder: 'app',
    controllers: ['Users'],
    launch: function(){
        Ext.create('Ext.container.Viewport',{
            layout: 'fit',
            items: [
                {
                   /* xtype: 'panel',
                    title: '用户',
                    html: '将在这里的用户清单'*/
                   xtype: 'userlist'
                }
            ]
        })
    }
});