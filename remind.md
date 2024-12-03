版本必须固定："@clerk/nextjs": "^4.29.12",

1. 根据clerk简介，构建项目，写好provider
2. Prisma 包 npm i prisma | npx init prisma
npm i @prisma/client
3. 写好model npx prisma generate

<!-- 数据库连接 -->
连接好数据库之后，可以
npx prisma db push
> npx prisma studio
运行查看

<!-- 登录/注册页面逻辑 -->
.xxx 是className

 npx shadcn@latest init
 安装ui组件库

form-provider 引入
npx shadcn@latest add --al

??
1. children 的提示没得；
2. tailwind 写页面咋写？？（花1h速成一下）
3. 为什么在下面导入 Image 没有提示？？？





tailwind
1. 设置元素在大屏幕（large devices）上的宽度为 100%