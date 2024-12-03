
// 用于身份认证以及路由校验
// 来源地址：https://dashboard.clerk.com/apps/app_2pYskZXxBueEjmVZ8a6cjcOR6wd/instances/ins_2pYskajXg0cQZ3TuMB6mb9qXiO1
// authMiddleware不知道从哪来的
import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes: ['/','/auth(.*)','/portal(.*)'],
    ignoredRoutes: ['/chatbot'],
});

export const config = {
    matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}


// 整体来说，这个正则表达式匹配那些不以 .w 结尾且不包含 _next 的路径。
// 这是一个正则表达式，匹配以 api 或 trpc 开头的路径。

// 这是一个负向前瞻（negative lookahead）正则表达式。
// (?!.+.[w]+$|_next)：这部分表示“不匹配”的条件。
// .+.[w]+$：匹配以 .w 结尾的任何路径（例如，.jpg, .png 等）。
// |_next：或者匹配 _next。
// .*：匹配任意字符（除了换行符）零次或多次。