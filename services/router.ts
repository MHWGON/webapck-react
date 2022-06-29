/**
 * A route object represents a logical route, with (optionally) its child
 * routes organized in a tree-like structure.
 */
export interface RouteObject {
    caseSensitive?: boolean; // 大小写敏感
    children?: RouteObject[]; // 子路由
    element?: React.ReactNode; // 组件
    index?: boolean; // 在子路由中，默认为父级路由的首页
    path?: string; // URL 路径
}
