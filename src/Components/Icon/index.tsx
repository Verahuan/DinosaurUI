import React from 'react'
import classnames from 'classnames'
interface iconPorps {
  iconcolor?:string
}
const AddSvg:React.FC<iconPorps>=(props)=>{
  const {
    iconcolor
  }=props
  const classes=classnames('icon',{
    [`icon-${iconcolor}`]:iconcolor
  })
  return (
    <div {...props}>
      <svg width="20" height="20" viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg" className={classes}>
        <path d="M10.7812 6.875C10.7812 6.44353 10.4315 6.09375 10 6.09375C9.56853 6.09375 9.21875 6.44353 9.21875 6.875V9.21875H6.875C6.44353 9.21875 6.09375 9.56853 6.09375 10C6.09375 10.4315 6.44353 10.7812 6.875 10.7812H9.21875V13.125C9.21875 13.5565 9.56853 13.9062 10 13.9062C10.4315 13.9062 10.7812 13.5565 10.7812 13.125V10.7812H13.125C13.5565 10.7812 13.9062 10.4315 13.9062 10C13.9062 9.56853 13.5565 9.21875 13.125 9.21875H10.7812V6.875Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M9.99998 18.125C14.4873 18.125 18.125 14.4873 18.125 9.99997C18.125 5.51268 14.4873 1.875 9.99998 1.875C5.51268 1.875 1.875 5.51268 1.875 9.99997C1.875 14.4873 5.51268 18.125 9.99998 18.125ZM16.5625 9.99997C16.5625 13.6244 13.6243 16.5625 9.99998 16.5625C6.37564 16.5625 3.4375 13.6243 3.4375 9.99997C3.4375 6.37562 6.37563 3.4375 9.99998 3.4375C13.6243 3.4375 16.5625 6.37562 16.5625 9.99997Z" />
      </svg>
    </div>

  )
}
const Delete:React.FC<iconPorps>=(props)=>{
  const {
    iconcolor
  }=props
  const classes=classnames('delete',{
    [`icon-${iconcolor}`]:iconcolor
  })
  return (
    <div {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={classes}>
        <path d="M17.9129 7.41291C18.279 7.0468 18.279 6.4532 17.9129 6.08709C17.5468 5.72097 16.9532 5.72097 16.5871 6.08709L12 10.6742L7.41291 6.08709C7.0468 5.72097 6.4532 5.72097 6.08709 6.08709C5.72097 6.4532 5.72097 7.0468 6.08709 7.41291L10.6742 12L6.08709 16.5871C5.72097 16.9532 5.72097 17.5468 6.08709 17.9129C6.4532 18.279 7.0468 18.279 7.41291 17.9129L12 13.3258L16.5871 17.9129C16.9532 18.279 17.5468 18.279 17.9129 17.9129C18.279 17.5468 18.279 16.9532 17.9129 16.5871L13.3258 12L17.9129 7.41291Z" />
      </svg>
    </div>

  )
}

const Left:React.FC<iconPorps>=(props)=>{
  const {
    iconcolor
  }=props
  const classes=classnames('icon',{
    [`icon-${iconcolor}`]:iconcolor
  })
  return (
    <div {...props}>
      <svg {...props} width="48" height="48" viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg" className={classes}>
        <rect width="48" height="48" rx="24" fill="black" fillOpacity="0.24"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M26.3504 29.1629C25.9843 29.529 25.3907 29.529 25.0246 29.1629L21.0549 25.1932C20.3959 24.5342 20.3959 23.4658 21.0549 22.8068L25.0246 18.8371C25.3907 18.471 25.9843 18.471 26.3504 18.8371C26.7165 19.2032 26.7165 19.7968 26.3504 20.1629L22.5133 24L26.3504 27.8371C26.7165 28.2032 26.7165 28.7968 26.3504 29.1629Z"/>
      </svg>
    </div>

  )
}
const Right:React.FC<iconPorps>=(props)=>{
  const {
    iconcolor
  }=props
  const classes=classnames('icon',{
    [`icon-${iconcolor}`]:iconcolor
  })
  return (
    <div {...props} >
      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={classes}>
        <rect width="48" height="48" rx="24" fill="black" fillOpacity="0.24"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M21.6496 29.1629C22.0157 29.529 22.6093 29.529 22.9754 29.1629L26.9451 25.1932C27.6041 24.5342 27.6041 23.4658 26.9451 22.8068L22.9754 18.8371C22.6093 18.471 22.0157 18.471 21.6496 18.8371C21.2835 19.2032 21.2835 19.7968 21.6496 20.1629L25.4867 24L21.6496 27.8371C21.2835 28.2032 21.2835 28.7968 21.6496 29.1629Z"/>
      </svg>
    </div>
  )
}
//imageViewer相关
const PlusAdd:React.FC<iconPorps>=(props)=>{
  const {
    iconcolor
  }=props
  const classes=classnames('icon',{
    [`icon-${iconcolor}`]:iconcolor
  })
  return (
    <div {...props} >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
        <path d="M9.1875 5.625C9.1875 5.10723 8.76777 4.6875 8.25 4.6875C7.73223 4.6875 7.3125 5.10723 7.3125 5.625V7.3125H5.625C5.10723 7.3125 4.6875 7.73223 4.6875 8.25C4.6875 8.76777 5.10723 9.1875 5.625 9.1875H7.3125V10.875C7.3125 11.3928 7.73223 11.8125 8.25 11.8125C8.76777 11.8125 9.1875 11.3928 9.1875 10.875V9.1875H10.875C11.3928 9.1875 11.8125 8.76777 11.8125 8.25C11.8125 7.73223 11.3928 7.3125 10.875 7.3125H9.1875V5.625Z"/>
        <path d="M14.709 13.3831C15.8301 11.9743 16.5 10.1904 16.5 8.24997C16.5 3.69364 12.8063 0 8.24998 0C3.69365 0 0 3.69364 0 8.24997C0 12.8063 3.69365 16.5 8.24998 16.5C10.1904 16.5 11.9743 15.8301 13.3831 14.709L16.2121 17.5379C16.5782 17.904 17.1718 17.904 17.5379 17.5379C17.904 17.1718 17.904 16.5782 17.5379 16.2121L14.709 13.3831ZM14.625 8.24997C14.625 11.7708 11.7708 14.625 8.24998 14.625C4.72919 14.625 1.875 11.7708 1.875 8.24997C1.875 4.72918 4.72918 1.875 8.24998 1.875C11.7708 1.875 14.625 4.72917 14.625 8.24997Z"/>
      </svg>
    </div>
  )
}
const Minus:React.FC<iconPorps>=(props)=>{
  const {
    iconcolor
  }=props
  const classes=classnames('icon',{
    [`icon-${iconcolor}`]:iconcolor
  })
  return (
    <div {...props} >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
        <path d="M8.625 10.3125C8.10723 10.3125 7.6875 10.7322 7.6875 11.25C7.6875 11.7678 8.10723 12.1875 8.625 12.1875H13.875C14.3928 12.1875 14.8125 11.7678 14.8125 11.25C14.8125 10.7322 14.3928 10.3125 13.875 10.3125H8.625Z"/>
        <path d="M17.709 16.3831C18.8301 14.9743 19.5 13.1904 19.5 11.25C19.5 6.69364 15.8063 3 11.25 3C6.69365 3 3 6.69364 3 11.25C3 15.8063 6.69365 19.5 11.25 19.5C13.1904 19.5 14.9743 18.8301 16.3831 17.709L19.2121 20.5379C19.5782 20.904 20.1718 20.904 20.5379 20.5379C20.904 20.1718 20.904 19.5782 20.5379 19.2121L17.709 16.3831ZM17.625 11.25C17.625 14.7708 14.7708 17.625 11.25 17.625C7.72919 17.625 4.875 14.7708 4.875 11.25C4.875 7.72918 7.72918 4.875 11.25 4.875C14.7708 4.875 17.625 7.72917 17.625 11.25Z"/>
      </svg>
    </div>
  )
}
const SquareRight:React.FC<iconPorps>=(props)=>{
  const {
    iconcolor
  }=props
  const classes=classnames('icon',{
    [`icon-${iconcolor}`]:iconcolor
  })
  return (
    <div {...props} >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
        <path d="M8.25 4.74405V3.373C8.25 2.57118 9.21943 2.16963 9.7864 2.7366L12.1136 5.06381C12.4651 5.41528 12.4651 5.98513 12.1136 6.3366L9.7864 8.66381C9.21943 9.23077 8.25 8.82923 8.25 8.02741V6.63521C5.84859 7.01295 4.125 8.83647 4.125 11.2505C4.125 11.7683 3.70527 12.188 3.1875 12.188C2.66973 12.188 2.25 11.7683 2.25 11.2505C2.25 7.67166 4.9213 5.1456 8.25 4.74405Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M6 12.7504C6 11.0935 7.34315 9.75037 9 9.75037H18C19.6569 9.75037 21 11.0935 21 12.7504V18.0004C21 19.6572 19.6569 21.0004 18 21.0004H9C7.34315 21.0004 6 19.6572 6 18.0004V12.7504ZM9 11.6254H18C18.6213 11.6254 19.125 12.129 19.125 12.7504V18.0004C19.125 18.6217 18.6213 19.1254 18 19.1254H9C8.37868 19.1254 7.875 18.6217 7.875 18.0004V12.7504C7.875 12.129 8.37868 11.6254 9 11.6254Z"/>
      </svg>
    </div>
  )
}
const ScaleSquare:React.FC<iconPorps>=(props)=>{
  const {
    iconcolor
  }=props
  const classes=classnames('icon',{
    [`icon-${iconcolor}`]:iconcolor
  })
  return (
    <div {...props} >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
        <path d="M9 8.4375C9 8.09975 8.81832 7.7881 8.52441 7.62169C8.23049 7.45528 7.86978 7.45983 7.58016 7.6336L6.64266 8.1961C6.36028 8.36553 6.1875 8.67069 6.1875 9V9.1875C6.1875 9.70527 6.60723 10.125 7.125 10.125V15.3751C7.125 15.8929 7.54473 16.3126 8.0625 16.3126C8.58027 16.3126 9 15.8929 9 15.3751V8.4375Z"/>
        <path d="M17.25 8.4375C17.25 8.09975 17.0683 7.7881 16.7744 7.62169C16.4805 7.45528 16.1198 7.45983 15.8302 7.6336L14.8927 8.1961C14.6103 8.36553 14.4375 8.67069 14.4375 9V9.1875C14.4375 9.70527 14.8572 10.125 15.375 10.125V15.3751C15.375 15.8929 15.7947 16.3126 16.3125 16.3126C16.8303 16.3126 17.25 15.8929 17.25 15.3751V8.4375Z" />
        <path d="M13.125 9.5625C13.125 10.0803 12.7053 10.5 12.1875 10.5C11.6697 10.5 11.25 10.0803 11.25 9.5625C11.25 9.04473 11.6697 8.625 12.1875 8.625C12.7053 8.625 13.125 9.04473 13.125 9.5625Z" />
        <path d="M12.1875 15.375C12.7053 15.375 13.125 14.9553 13.125 14.4375C13.125 13.9197 12.7053 13.5 12.1875 13.5C11.6697 13.5 11.25 13.9197 11.25 14.4375C11.25 14.9553 11.6697 15.375 12.1875 15.375Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M3 6.75C3 4.67893 4.67893 3 6.75 3H17.25C19.3211 3 21 4.67893 21 6.75V17.25C21 19.3211 19.3211 21 17.25 21H6.75C4.67893 21 3 19.3211 3 17.25V6.75ZM6.75 4.875H17.25C18.2855 4.875 19.125 5.71447 19.125 6.75V17.25C19.125 18.2855 18.2855 19.125 17.25 19.125H6.75C5.71447 19.125 4.875 18.2855 4.875 17.25V6.75C4.875 5.71447 5.71447 4.875 6.75 4.875Z"/>
      </svg>
    </div>
  )
}
const Copy:React.FC<iconPorps>=(props)=>{
  const {
    iconcolor
  }=props
  const classes=classnames('icon',{
    [`icon-${iconcolor}`]:iconcolor
  })
  return (
    <div {...props} >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
        <path d="M11.625 10.6875C11.1072 10.6875 10.6875 11.1072 10.6875 11.625C10.6875 12.1428 11.1072 12.5625 11.625 12.5625H16.125C16.6428 12.5625 17.0625 12.1428 17.0625 11.625C17.0625 11.1072 16.6428 10.6875 16.125 10.6875H11.625Z"/>
        <path d="M11.625 14.4375C11.1072 14.4375 10.6875 14.8572 10.6875 15.375C10.6875 15.8928 11.1072 16.3125 11.625 16.3125H16.125C16.6428 16.3125 17.0625 15.8928 17.0625 15.375C17.0625 14.8572 16.6428 14.4375 16.125 14.4375H11.625Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.1875 2.63379C4.42709 2.63379 3 4.06088 3 5.82129V15.5625C3 17.3229 4.42709 18.75 6.1875 18.75H6.84445C7.17739 20.0441 8.35203 21.0003 9.75 21.0003H18C19.6569 21.0003 21 19.6571 21 18.0003V9.00026C21 7.34341 19.6569 6.00026 18 6.00026H16.1876V5.82129C16.1876 4.06088 14.7605 2.63379 13.0001 2.63379H6.1875ZM14.3126 6.00026V5.82129C14.3126 5.09642 13.7249 4.50879 13.0001 4.50879H6.1875C5.46263 4.50879 4.875 5.09642 4.875 5.82129V15.5625C4.875 16.2874 5.46263 16.875 6.1875 16.875H6.75V9.00026C6.75 7.34341 8.09315 6.00026 9.75 6.00026H14.3126ZM9.75 7.87526H18C18.6213 7.87526 19.125 8.37894 19.125 9.00026V18.0003C19.125 18.6216 18.6213 19.1253 18 19.1253H9.75C9.12868 19.1253 8.625 18.6216 8.625 18.0003V9.00026C8.625 8.37894 9.12868 7.87526 9.75 7.87526Z"/>
      </svg>
    </div>
  )
}
const DownLoad:React.FC<iconPorps>=(props)=>{
  const {
    iconcolor
  }=props
  const classes=classnames('icon',{
    [`icon-${iconcolor}`]:iconcolor
  })
  return (
    <div {...props} >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
        <path d="M12.9374 3.9375C12.9374 3.41973 12.5177 3 11.9999 3C11.4821 3 11.0624 3.41973 11.0624 3.9375V10.5H9.33878C8.3551 10.5 7.84516 11.6735 8.51634 12.3926L11.1775 15.2438C11.6222 15.7203 12.3776 15.7203 12.8223 15.2438L15.4835 12.3926C16.1547 11.6735 15.6447 10.5 14.661 10.5H12.9374V3.9375Z"/>
        <path d="M4.875 14.8125C4.875 14.2947 4.45527 13.875 3.9375 13.875C3.41973 13.875 3 14.2947 3 14.8125V17.0625C3 19.2371 4.76288 21 6.9375 21H17.0625C19.2371 21 21 19.2371 21 17.0625V14.8125C21 14.2947 20.5803 13.875 20.0625 13.875C19.5447 13.875 19.125 14.2947 19.125 14.8125V17.0625C19.125 18.2016 18.2016 19.125 17.0625 19.125H6.9375C5.79841 19.125 4.875 18.2016 4.875 17.0625V14.8125Z"/>
      </svg>
    </div>
  )
}
// menu 菜单相关
const Doted:React.FC<iconPorps>=(props)=>{
  const {
    iconcolor
  }=props
  const classes=classnames('icon',{
    [`icon-${iconcolor}`]:iconcolor
  })
  return (
    <div {...props} >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.84375 8.59375C4.06713 8.59375 3.4375 9.22329 3.4375 9.99999C3.4375 10.7767 4.06713 11.4062 4.84375 11.4062C5.62037 11.4062 6.25 10.7767 6.25 9.99999C6.25 9.22329 5.62037 8.59375 4.84375 8.59375Z" fill="#18253D"/>
        <path d="M10 8.59375C9.22333 8.59375 8.59375 9.22333 8.59375 10C8.59375 10.7767 9.22333 11.4062 10 11.4062C10.7767 11.4062 11.4062 10.7767 11.4062 10C11.4062 9.22333 10.7767 8.59375 10 8.59375Z" fill="#18253D"/>
        <path d="M15.1562 8.59375C14.3797 8.59375 13.75 9.22328 13.75 9.99998C13.75 10.7767 14.3797 11.4062 15.1562 11.4062C15.9328 11.4062 16.5625 10.7767 16.5625 9.99998C16.5625 9.22324 15.9328 8.59375 15.1562 8.59375Z" fill="#18253D"/>
      </svg>
    </div>
  )
}



export {
  AddSvg,
  Delete,
  Left,
  Right,
  PlusAdd,
  Minus,
  SquareRight,
  ScaleSquare,
  Copy,
  DownLoad,
  Doted
}
