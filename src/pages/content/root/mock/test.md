## 配置moke返回结果

* 在目录》moke》json》下面配置moke返回结果
```json5
{
  list: [
    {
      url:"/api/test",
      request: "POST",
      result: {
        code: 1,
        total: "@integer(33,33)",
        "data|10": [
          {
            id:"@id()",
            userName:"@cname()",
            date:"@datetime()",
            avatar:"@image('200*200','red','#fff','avatar')",
            description:"@paragraph()",
            ip:"@ip",
            email:"@email()",
            url: "@url()",
            name: "@ctitle(5)",
            "status|1": [
              "申请",
              "上架",
              "下架"
            ]
          }
        ]
      }
    },
  ]
}
```

## 启动项目

启动项目命令为

> npm run start_mock
