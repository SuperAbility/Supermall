module.exports={
	/*先要在里面用configureWebpack属性代表是配置webpack项目配置*/
	configureWebpack:{
		//配置路径相关的用resolve属性
		resolve:{
			   // extensions:[]  转过来么系统默认配置过.js .json .vue后缀名不需要写
			 /*真正配置项目路径文件夹别名在底下这个属性*/
			alias:{
				//格式前面是文件夹别名起的名字  后面是指的作用文件夹名
				/*系统默认的*/
				 '@':'src',
				 'assets':'@/src',
				 'common':'@/common',
				 'components':'@/components',
				 'network':'@/network',
				 'router':'@/router',
				 'store':'@/store',
				 'views':'@/views',
      }
		}

	}

}
