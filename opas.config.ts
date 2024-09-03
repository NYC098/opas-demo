import { OpasConfig } from "@opas/cli";

const config: OpasConfig = {
  configs: [
    {
      url: "http://127.0.0.1:12000/v2/api-docs",
      namespace: "file-manage", // 文件管理服务
      extractField: "resp",
      exclude: /^\/nacos/,
    },
  ],
};
export default config;
