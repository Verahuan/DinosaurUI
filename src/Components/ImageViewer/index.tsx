import React,{Component} from 'react';
import { Delete,
  Left,
  Right,
  PlusAdd,
  Minus,
  SquareRight,
  ScaleSquare,
  Copy,
  DownLoad
} from '@/Components/Icon';

// 特性：
// 1.左右切换（左右切换按钮状态改变）
// 2.点击icon实现放大缩小
// 3.点击icon实现旋转
// 4.点击icon实现图片比例更改
// 5.点击icon实现下载

class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: props.imageList, //传入的图片列表
      imgAttr:{
        src:props.url,
        alt:props.alt
      },
      imgIndex:props.imgIndex,
      loadIng: false, // loading元素显示隐藏
      rotateDeg:0,//图片旋转角度
      increaseNum: 20, // 图片放大时距离空隙
      imgStyle:{
        height: "373px",
        width: "373px"
      },
      middleStyle:{
        display:"none"
      },
      imgOriginalWidth: 373, // 当前图默认宽度值
      imgOriginalHeight: 373, // 当前图默认高度值
    };
  }
  photoShow(url,alt){
    // 图片加载并处理
    this.setState({
      loadIng: true
    });
    const img = new Image();
    img.src = url;
    img.onload = () => {
      this.setState(
        {
          loadIng: false,
          imgAttr: {
            src: url,
            alt,
          }
        }
      );
  }
  }
  // 下一张图片
  goNextEvent = () => {
    const { imgIndex, imageList,loadIng} = this.state;
    console.log("go Next")
    // 如果还在loading加载中，不予许上一张下一张操作
    if (loadIng) {
      return;
    }
    const nImgIndex = imgIndex + 1;
    // console.log(nImgIndex);
    if (nImgIndex > imageList.length - 1) {
      return;
    }
    this.setState(
      {
        imgIndex: nImgIndex,
        rotateDeg: 0,
        imgStyle: {
          height: "373px",
          width: "373px"
        },
      },
      () => {
        // 如果不存在大图，那么直接拿小图代替。
        const currentUrl = imageList[nImgIndex].url;
        console.log("current",nImgIndex)
        this.photoShow(currentUrl, imageList[nImgIndex].alt);
      }
    );
  };
  // 上一张图片
  goPreEvent = () => {
    const { imgIndex, imageList,loadIng} = this.state;
    console.log("go Next")
    // 如果还在loading加载中，不予许上一张下一张操作
    if (loadIng) {
      return;
    }
    const nImgIndex = imgIndex - 1;
    // console.log(nImgIndex);
    if (nImgIndex < 0) {
      return;
    }
    this.setState(
      {
        imgIndex: nImgIndex,
        rotateDeg: 0,
        imgStyle: {
          height: "373px",
          width: "373px"
        },
      },
      () => {
        // 如果不存在大图，那么直接拿小图代替。
        const currentUrl = imageList[nImgIndex].url;
        console.log("current",nImgIndex)
        this.photoShow(currentUrl, imageList[nImgIndex].alt);
      }
    );
  };
  //向左边旋转事件
  turnLeftEvent = () => {
    const { rotateDeg,imgStyle} = this.state;
    const iRotateDeg = rotateDeg - 90;
    this.setState(
      {
        imgStyle: Object.assign({},imgStyle,{
          transform: `rotate(${iRotateDeg}deg)`,
        }),
        rotateDeg: iRotateDeg,
      }
    );
  };
  //图片放大
  toBigEvent = () => {
    const { imgStyle, imgOriginalWidth, imgOriginalHeight } = this.state;
    let width = parseFloat(imgStyle.width) * 1.5;
    let height = parseFloat(imgStyle.height) * 1.5;
    // 图片放大不能超过5倍
    if (width > imgOriginalWidth * 5) {
      width = imgOriginalWidth * 5;
      height = imgOriginalHeight * 5;
    }
    this.setState(
      {
        imgStyle: Object.assign({},imgStyle, {
          width: `${width}px`,
          height: `${height}px`,
        })
      }
    );//不能覆盖原有属性 待解决//加一个空对象
  };
  //图片缩小
  toSmallEvent = () => {
    const { imgStyle, imgOriginalWidth, imgOriginalHeight } = this.state;
    let width = parseFloat(imgStyle.width) /1.5;
    let height = parseFloat(imgStyle.height) /1.5;
    // 图片放大不能超过5倍
    if (width < imgOriginalWidth /5) {
      width = imgOriginalWidth /5;
      height = imgOriginalHeight /5;
    }
    this.setState(
      {
        imgStyle: Object.assign({},imgStyle, {
          width: `${width}px`,
          height: `${height}px`,
        })
      }
    );//不能覆盖原有属性 待解决//加一个空对象
  };
  // 回归原位
  toRevert=()=>{
    const { imgStyle} = this.state;
    this.setState(
      {
        rotateDeg: 0,
        imgStyle: {
          height: "373px",
          width: "373px"
        },
        middleStyle:{

        }
      })
    // 中间控件的显示与隐藏
    setTimeout(()=>{
      this.setState(
        {
          middleStyle:{
            display:"none"
          }
        })
    },1000)
  }
  //下载图片
  download = () => {
    const {imgAttr}=this.state
    const element = document.createElement("a");
    const file = new Blob(
      [
      imgAttr.src
      ],
      { type: "image/*" }
    );
    element.href = URL.createObjectURL(file);
    console.log( element.href,"a")
    element.download = "image.jpeg";
    element.click();
  };
  //复制图片
  Copy=()=> {
    console.log("copy")
    const selection =window.getSelection();
    const element = document.getElementsByClassName('image')[0];
    if(selection.rangeCount>0) selection.removeAllRanges();
    const range=document.createRange();
    range.selectNode(element)
    selection.addRange(range)
    document.execCommand("copy");
    selection.removeAllRanges();
  }
  render()
{
  return (
    <>
      <div className="imageViewer">
        <div className="header">
          <div className="title">{`(${this.state.imgIndex+1}/${this.state.imageList.length}) 名称：${this.state.imageList[this.state.imgIndex].alt}`}</div>
          <div className="icon">
            <Delete />
          </div>
        </div>
        <div className="body">
          <div className="image-ul">
                  <img className="image"
                       src={this.state.imgAttr.src}
                       alt={this.state.imgAttr.alt}
                       style={this.state.imgStyle}/>
          </div>
          <Left iconcolor="white" className="left"  onClick={this.goPreEvent}/>
          <Right iconcolor="white" className="right"  onClick={this.goNextEvent}/>
          <div className="image-middle" style={this.state.middleStyle}>100%</div>
          <div className="operations">
            <PlusAdd iconcolor="white" onClick={this.toBigEvent}/>
            <Minus iconcolor="white" onClick={this.toSmallEvent}/>
            <SquareRight iconcolor="white" onClick={this.turnLeftEvent}/>
            <ScaleSquare iconcolor="white" onClick={this.toRevert}/>
            <Copy iconcolor="white" onClick={this.Copy}/>
            <DownLoad iconcolor="white"  onClick={this.download}/>
          </div>
        </div>
      </div>
    </>
  )
}
}
export default ImageViewer
