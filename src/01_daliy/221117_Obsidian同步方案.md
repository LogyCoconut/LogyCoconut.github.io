---
title: Obsidian多端同步方案
---

```
目前采用「Obsidian Git」插件进行同步
```

## 目标

1. PC端能够编辑、阅读
2. 移动端可以访问
3. 同步方式便捷

## 实现思路

### 一、 ~~Remotely Save 插件（放弃）~~

很方便的插件，但是不支持过滤指定文件夹功能（我没找到😢），只适合纯文档型的仓库

### 二、~~webdav同步（不太方便，未实现）~~

> 通过 Python 以及[坚果云](https://www.jianguoyun.com)的免费webdav服务实现

1. 通过  [easywebdav](%3Chttps://gitee.com/mirrors/easywebdav%3E)  库上传/覆盖文件

2. 每一次 `commit` 时读取涉及到文件列表，只对修改文件做上传操作，减少 `webdav` 的交互请求（坚果云对上传频率有限制）

3. 移动端 `Obsidian` APP，安装 `Remotely Save` 插件，并配置好坚果云的 `webdav` 地址进行同步

### 三、Git仓库（目前使用的是这种）

1. 安装 `Obsidian Git` 插件，将 Obsidian 仓库作为 Git 仓库管理

2. 配合 `Github Actions` 每次提交时部署到 `Github Pages` (之后会同步 `Gitee Pages` )
