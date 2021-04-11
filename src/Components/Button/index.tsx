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

