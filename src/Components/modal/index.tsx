import React from 'react';
import { Button} from 'dumi-ui';
import classnames from 'classnames'
import { Delete } from '@/Components/Icon';
// 宽度六个尺寸：320、440、680、920、1200、1500（响应式），高度根据自定义
export enum ModalSize{
  first="first",
  secondary="secondary",
  third="third",
  fourth="fourth",
  fifth="fifth",
  seventh="seventh"
}//定义modal尺寸
interface ModalProps{
  className?:string;
  size?:ModalSize;
  icon?:Boolean;
  children?:React.ReactNode
}
const Modal:React.FC<ModalProps>=(props)=>{
  const {
    size,
    children,
    className,
    icon
  }=props
  const classes=classnames('Modal', {
    [`Modal+${size}`]:size,
    'icon':icon
    }
  )
  return(
    <div className={classes}>
      <div className="Modal-header">
        <div className="title">标题</div>
        <div className="icon"><Delete/></div>
      </div>
      <hr/>
      <div className="Modal-content">
       <div>张欢欢...</div>
       <div>张欢欢...</div>
       <div style={{height:200}}>张欢欢...</div>
      </div>
      <hr/>
      <div className="Modal-footer">
        <Button btnType="secondary">取消</Button>
        <Button>确认</Button>
      </div>
    </div>
  )
}
export default Modal
