module.exports = {
    // 例如应用要被部署再一个子路径上，则需要用这个选项指定路径 'http://xxx.xxx/vue-start',这个选项就为vue-start
    publicPath: process.env.NODE_ENV === 'production' ?
        '/vue-start/' : '/',

    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    outputDir: "/dist",

    // 放置生成的静态资源的目录
    assetsDir: "",

    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    indexPath: "index.html",

    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_TITLE || '后台管理系统' : '项目开发中',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },

    css: {
        loaderOptions: {
            css: {
                // 这里的选项会传递给 css-loader
            },
            less: {
                // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
                // `primary` is global variables fields name
                // 属性值包裹在lessOptions内
                lessOptions: {
                    javascriptEnabled: true,
                    globalVars: {
                        primary: '#fff'
                    }
                }
            }
        }
    },


    devServer: {
        host: '192.168.0.159',
        port: 8080,
        open: true, // true打开默认浏览器
        hot: true // 启用webpack热模块替换功能(效果是界面无刷新更新)

    }

}