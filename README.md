# yh-spider

樱花动漫的视频爬虫。

先进入视频播放页，在源码里搜索当前页面`url`最后一个斜线后面的第一个数字，应该是个四位数，找一个`js`文件的路径，复制出来，更改`index.js`里的`filepPath`。

目前来看，并不是所有视频的`url`都是同一种格式，有些是视频`id`列表，如例子，有些可能直接给出了视频的`url`，需要根据这个`js`文件的内容，自己修改`getIdByReg.js`文件的正则或`getVideoByUrl.js`里的逻辑。

## 安装

```
yarn
```

## 运行

```
yarn start
```

