Ext.define('AM.store.Users',{
   extend: 'Ext.data.Store',
   /*fields: ['name','email'],*/
   model: 'AM.model.User',
   data: [
       {    name: '张三',
            email: 'ed@sencha.com'
       },
       {    name: '李四',
            email: 'tommy@sencha.com'
       }
   ]
});