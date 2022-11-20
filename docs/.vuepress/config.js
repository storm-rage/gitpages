module.exports = {
    publicPath: '/',
    title: '飞琼神仙客',
    description: 'Just playing around',
    head:[
        ['link',
            { rel: 'icon', href: '/egg.png' }
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],
    ],
    base: "/",
    dest: "./dist",
    markdown: {
        lineNumbers: true
    },
    // theme: 'vuepress-theme-xx',
    themeConfig: {
        //搜索结果数量
        searchMaxSuggestions: 10,
        nav: [
            //页面路由默认读取目录下的readme.md
            {
                text: 'vue',
                items: [
                    {text: 'vue2.0进阶', link: '/vue/vue2.0'},
                    {text: 'vue3.0新特性', link: '/vue/vue3.0'},
                    {text: 'vueX', link: '/vue/vuex'},
                    // {text: '响应式原理', link: '/vue/Responsive'},
                    // {text: 'diff原理', link: '/vue/diff'},
                    // {text: '编译原理', link: '/vue/flutter'},
                    // {text: '实战总结', link: '/vue/sumUp'},
                ]
            },
            {
                text: 'react',
                items: [
                    {text: 'react进阶', link: '/react/reactExtend'},
                    {text: 'react状态管理', link: '/react/reactState'},
                    // {text: 'react组件封装', link: '/others/flutter'},
                    // {text: 'react源码分析', link: '/others/flutter'},
                    // {text: '实战总结', link: '/others/flutter'},
                ]
            },
            // {
            //     text: 'nodejs',
            //     items: [
            //         {text: 'node框架', link: '/node/frame'},
            //         {text: 'node网络与部署', link: '/node/netDeploy'},
            //         // {text: 'express-ts实战', link: '/others/flutter'},
            //     ]
            // },
            {
                text: 'ts',
                items: [
                    // {text: 'js基础', link: '/js/README'},
                    // {text: 'ts初探', link: '/js/tsFirst'},
                    // {text: 'ts基础', link: '/js/tsSecond'},
                    // {text: 'ts工程', link: '/js/tsThird'},
                ]
            },
            {
                text: '工程化',
                items: [
                    // {text: '前端工程化', link: '/Engineering/Engineering'},
                    // {text: 'webpack', link: '/Engineering/webpack'},
                    {text: 'vite', link: '/Engineering/vite'},
                    {text: '常用工具', link: '/Engineering/tools'},
                ]
            },
            // {
            //     text: '其它',
            //     items: [
            //         {text: 'sql', link: '/others/sql'},
            //         {text: 'java', link: '/others/java'},
            //         {text: 'flutter', link: '/others/flutter'},
            //     ]
            // },
            {
                text: '问题总结',
                items: [
                    {text: '部分一', link: '/programResolve/chapter1'},
                ]
            },

        ],
        sidebar: 'auto',
    }
}
function genSidebarConfig (title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '',
                'getting-started',
                'customize',
                'advanced',
            ]
        }
    ]
}