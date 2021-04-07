import React from 'react';
import classnames from 'classnames'
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
  children?:React.ReactNode
}//传入button的参数类型
const Button:React.FC<BaseButtonProps>=(props)=>{
  const {
    className,
    btnType,
    disabled,
    children,
    size,
    icon
  }=props
  //btn,btn-lg,btn-primary
  const classes=classnames(className,'btn',{
    [`btn-${btnType}`]:btnType,
    [`btn-${size}`]:size,
    'disabled':disabled
  })
  return (<>
      <button {...props} className={classes} disabled={disabled} >{icon}{children}</button>
  </>

  )
}
Button.defaultProps={
  btnType:ButtonType.primary,
  disabled:false,
  children:"主要按钮"
}
export default Button

