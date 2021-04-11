# dumi-ui 使用
* 使用dumi
* 完成部分文档内容
* 组件完成
## 组件介绍
## 现有组件列表
* button
* imageViewer
* Modal
* 设计稿中的icon(可改变颜色)
### button 
* 实现过程说明(函数组件，结合下方代码)：
- 使用`classnames`根据传入属性确定当前样式（样式实现查阅对应，less文件）
- 利用相邻子元素选择器实现`menu`按钮
- 用户使用过程可以传入属性：`BaseButtonProps`
```tsx
import React from 'react';
import classnames from 'classnames'
import {Doted} from 'dumi-ui';
export enum ButtonSize{
  Large="lg",
  Small="sm"
} //定义按钮尺寸，大小
export enum ButtonType{
  primary="primary",
  secondary="secondary",
  common="common",
  subtle="subtle",
  subtleNeutral="subtleNeutral",
  text="text",
  textNeutral="textNeutral",
  menu="menu",
  borderMenu="borderMenu"
}//定义按钮类型
interface BaseButtonProps{
  style?:React.CSSProperties;
  className?:string;
  disabled?:boolean;
  size?:ButtonSize;
  btnType?:ButtonType;
  icon?:React.ReactNode;
  iconPosition?:string;
  children?:React.ReactNode
}//传入button的参数类型
const Button:React.FC<BaseButtonProps>=(props)=>{
  const {
    className,
    btnType,
    disabled,
    children,
    size,
    icon,
    iconPosition
  }=props
  //btn,btn-lg,btn-primary
  const classes=classnames(className,'btn',{
    [`btn-${btnType}`]:btnType,
    [`btn-${size}`]:size,
    "right":iconPosition==="right",
    'disabled':disabled
  })
  return (<>
      <div className="btn-father">
        <button {...props} className={classes} disabled={disabled} >{icon}{children}</button>
        <div tabIndex={0} ><Doted/></div>
      </div>
  </>

  )
}
Button.defaultProps={
  btnType:ButtonType.primary,
  disabled:false,
  children:"主要按钮"
}
export default Button



```
##### primary button
* 包括三种大小
![pri-btn](https://github.com/Verahuan/DinosaurUI/blob/master/docs/image/button-pri.gif)
##### 菜单按钮
![meau-btn](https://github.com/Verahuan/DinosaurUI/blob/master/docs/image/button-menu.gif)
#### 二级按钮
![sec-btn](https://github.com/Verahuan/DinosaurUI/blob/preview/docs/image/button-second.gif)
#### 清浅按钮
![sec-btn](https://github.com/Verahuan/DinosaurUI/blob/preview/docs/image/button-sub.gif)
#### 文字按钮
![text-btn](https://github.com/Verahuan/DinosaurUI/blob/preview/docs/image/button-text.gif)
### imageViewer
* 实现过程说明(结合下方代码，class组件)：
- 用户可以传入属性值：
```tsx
interface ImageProps{
className?:string;
imageList:Array<any>;//图片数组
url?:string; //当前显示图片的url
alt?:string;//当前显示图片的alt
imgIndex:number; //当前显示图片在传入数据的数组的索引
}//传入imageViewr的参数类型

//图片数组实例：
//为了正常显示，必须有url、alt
const imageList=[
  {
    id:1,
    url:"http://img.touxiangwu.com/2020/3/qAVNbm.jpeg",
    alt:"zhh-1"
  },
  {
    id:2,
    url:"http://img.touxiangwu.com/2020/3/B7rmqu.jpeg",
    alt:"zhh-2"
  },
  {
    id:3,
    url:"http://img.touxiangwu.com/2020/3/nIFRv2.jpeg",
    alt:"zhh-3"
  },
  {
    id:4,
    url:"http://img.touxiangwu.com/2020/3/AJNFNv.jpeg",
    alt:"zhh-4"
  }
]
```
- 具体功能实现，详情见代码，src目录，均有注释
— 待完善：用户自定义功能按钮是否显示，图片下载功能需测试
* 展示如下：
![img-viewer](https://github.com/Verahuan/DinosaurUI/blob/preview/docs/image/image.gif)
* 支持：旋转，放大，缩小，归位，复制，下载功能
### modal
* 实现过程说明：
  - 与Button类似，使用类名，显示不同样式
  - 待完善，大屏幕响应式，媒体查询中间段不起作用
  - 展示如下：
* 6种大小modal
![modal](https://github.com/Verahuan/DinosaurUI/blob/preview/docs/image/modal.gif)
## Getting Started
Install dependencies,
```bash
@ npm i
```
Start the dev server,
```bash
@ npm start
```
Build documentation,
```bash
@ npm run docs:build
```
Build library via `father-build`,
```bash
@ npm run build
```
