export default {
    path: "/knowledge",
    component: () =>
        import ( /* webpackChunkName: "home" */ '@/views/knowledge'),
    children: [{
            path: "list",
            component: () =>
                import ( /* webpackChunkName: "knowledgeList" */ '@/views/knowledge/list'),
        },
        {
            path: "addOrUpdate",
            component: () =>
                import ( /* webpackChunkName: "knowledgeAddOrUpdate" */ '@/views/knowledge/addOrUpdate'),
        },

    ]
}