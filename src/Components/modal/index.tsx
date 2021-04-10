import React from 'react';
import {useState,useEffect} from 'react';
import { Button} from 'dumi-ui';
import classnames from 'classnames'
import { Delete } from '@/Components/Icon';
// 宽度六个尺寸：320、440、680、920、1200、1500（响应式），高度根据自定义
// 功能：
// 1.可以通过visible控制modal的显隐；
// 2.显示的内容可以自定义
// 3.取消和确认按钮会触发对应的回调：onClose/onConfirm
// 4.宽度的自响应（css）
// 5.antD控制是否显示对应的icon
export enum ModalSize{
  first="first",
  secondary="secondary",
  third="third",
  fourth="fourth",
  fifth="fifth",
  sixth="sixth"
}//定义modal尺寸
interface ModalProps{
  title?:string
  className?:string;
  size?:ModalSize;
  icon?:Boolean;
  children?:React.ReactNode;
  visible?:Boolean
}
const Modal:React.FC<ModalProps>=(props)=>{
  const {
    title="标题",
    size,
    children,
    className,
    icon,
    visible=true
  }=props
  const [innerVisible,ChangeVisibility]=useState(visible)
  useEffect(()=>ChangeVisibility(visible),[visible])
  const classes=classnames('Modal', {
    [`Modal-${size}`]:size,
    'icon':icon
    }
  )
  const onClose=()=>{
    ChangeVisibility(false)
  }
  const onConfirm=()=>{
    ChangeVisibility(false)
  }
  //visible控制显隐
  return(innerVisible &&
    <div className={classes} {...props}>
      <div className="Modal-header">
        <div className="title">{title}</div>
        <div className="icon" onClick={onClose}><Delete/></div>
      </div>
      <hr/>
      <div className="Modal-content">
        {children?children: <>
          <div>张欢欢...</div>
          <div>张欢欢...</div>
        </>
        }
      </div>
      <hr/>
      <div className="Modal-footer">
        <Button btnType="secondary" className="ModalButton" onClick={onClose}>取消</Button>
        <Button className="ModalButton" onClick={onConfirm}>确认</Button>
      </div>
    </div>
  )
}
export default Modal
