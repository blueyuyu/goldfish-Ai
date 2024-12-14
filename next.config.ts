import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // 扩展默认配置而不是替换

    // 例如，添加别名、插件或规则等

    // 添加一个简单的示例：添加一个别名
    config.resolve.alias["@components"] = path.join(__dirname, "components")

    // 返回修改后的 Webpack 配置
    return config
  },
}

export default nextConfig
