import Mock from 'mockjs'
Mock.setup({ timeout: 1000 });    // 设置4秒后再响应
Mock.mock('data.php','get', function(options) {   // Mock响应模板 
      return Mock.mock({
        "data|1-6": [{   // 随机生成1到6个数组元素
	       'id|+1': 88,    // 属性值自动加 1，初始值为88
           'name|1': ['tom',"jarry","susan"],        
           'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
		   'sex|1':['男',"女"]
        }]
});
});