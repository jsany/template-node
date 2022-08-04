<!--
 * @LastEditors: zhiguo.jzg
 * @Description: TODO: Description of file, its uses and information
 * @Date: 2021-10-26 15:12:50
 * @Author: zhiguo.jzg
 * @LastEditTime: 2022-04-02 21:22:04
-->
# oko

> 批量操作，如：一键操作多个 git 仓库

## 配置文件

当使用 `npm install` 时，在其 `postinstall` 生命周期钩子中，会把默认的配置文件填充到家目录下（即 `$HOME/.okorc.json`），然后优先使用这个配置文件，你可以编辑这个文件

## 使用

### 安装

方式一：

```bash
# 克隆仓库并安装依赖
$ git clone git@gitlab.alibaba-inc.com:zhiguo.jzg/oko.git
$ cd oko && yarn install

# 构建
$ yarn compile

# 建立软链
$ yarn link

# 查看命令是否生效
$ oko
```

方式二：

```bash
# 全局安装
$ tnpm i -g @ali/oko

# 查看命令是否生效
$ oko
```

### 配置

> 编辑配置文件 `$HOME/.okorc.json`，目前仅支持 git 命令

#### git

配置本地要进行批量操作的 git 工程目录

$HOME：代表家目录

```json
{
  "git": {
    "repos": [
      "$HOME/Workspace/amap/taxi/amap_bundle_taxi",
      "$HOME/Workspace/amap/taxi/amap_bundle_cloud_taxi",
      "$HOME/Workspace/amap/taxi/amap_bundle_lib_taxi",
      "$HOME/Workspace/amap/taxi/amap_bundle_lib_sharetrip",
      "$HOME/Workspace/amap/taxi/amap_bundle_sharedtrip_logic"
    ]
  }
}
```

### 用法

批量切换分支

```bash
$ oko git checkout independent/feature/1110/v450
```

批量拉取最新代码到本地

```bash
$ oko git fetch origin
```

批量将最新代码合并到本地

```bash
$ oko git rebase
```

批量将 445 代码合并到 450

```bash
# 当前分支：independent/feature/1110/v450
$ oko git merge independent/feature/1110/v445
```

## FAQ
