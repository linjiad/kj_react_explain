## Menu 导航菜单 
#### 为页面和功能提供导航的菜单列表
&nbsp;
&nbsp;
&nbsp;
### 引用
>const {LeftMenu,LeftMenuItem,LeftMenuSub,Icon} = window.common;

&nbsp;
&nbsp;

### LeftMenu

| 属性参数 | 属性类型 | 属性描述 |
| ------ | ------ | ------ |
| OPEN  | boolean | 是否开启全部显示默认为false |

&nbsp;
&nbsp;
&nbsp;
&nbsp;

### LeftMenuSub

| 属性参数 | 属性类型 | 属性描述 |
| ------ | ------ | ------ |
| title  | string | 标题 |
| lv  | int | 级别 |
| icon  | string | 图标 |
| key  | string | 标记 |
&nbsp;
&nbsp;
&nbsp;
&nbsp;

### LeftMenuItem

| 属性参数 | 属性类型 | 属性描述 |
| ------ | ------ | ------ |
| title  | string | 标题 |
| lv  | int | 级别 |
| change  | function | 点击菜单回调方法 |
| checked  | boolean | 被选中标记 |
&nbsp;
&nbsp;
&nbsp;
&nbsp;

### 左侧导航
垂直的左侧导航菜单