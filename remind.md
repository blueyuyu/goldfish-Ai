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

