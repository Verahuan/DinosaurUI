---
nav:
title: Components
path: /components
---
## modal样式
### 宽度六个尺寸：320、440、680、920、1200、1500（响应式），高度根据自定义

```tsx
import React from 'react';
import { useState,useEffect } from 'react';
import {
  Button,
  AddSvg,
  Delete, Modal
} from 'dumi-ui';

export default () => {
  const [firstShow,firstChangShow]=useState(false)
  const [secondShow,secondChangShow]=useState(false)
  const [thirdShow,thirdChangShow]=useState(false)
  const [fourthShow,fourthChangShow]=useState(false)
  const [fifthShow,fifthChangShow]=useState(false)
  const [sixthShow,sixthChangShow]=useState(false)
  const firstShowModal = () => {
    console.log("hhh")
    firstChangShow(firstShow=>!firstShow)
  }
  const secondShowModal = () => {
    console.log("hhh")
    secondChangShow(secondShow=>!secondShow)
  }
  const thirdShowModal = () => {
    console.log("hhh")
    thirdChangShow(thirdShow=>!thirdShow)
  }
  const fourthShowModal = () => {
    console.log("hhh")
    fourthChangShow(fourthShow=>!fourthShow)
  }
  const fifthShowModal = () => {
    console.log("hhh")
    fifthChangShow(fifthShow=>!fifthShow)
  }
  const sixthShowModal = () => {
    console.log("hhh")
    sixthChangShow(sixthShow=>!sixthShow)
  }
  return (
    <>
      <p>320px</p>
      <Button onClick={firstShowModal}>一级modal</Button>
      <Modal visible={firstShow} title="一级modal" size="first">
      </Modal>
      <p>440px</p>
      <Button onClick={secondShowModal}>二级modal</Button>
      <Modal visible={secondShow} title="二级modal" size="secondary"></Modal>
      <p>680px</p>
      <Button onClick={thirdShowModal}>三级modal</Button>
      <Modal visible={thirdShow} title="三级modal" size="third"></Modal>
      <p>920px</p>
      <Button onClick={fourthShowModal}>四级modal</Button>
      <Modal visible={fourthShow} title="四级modal" size="fourth"></Modal>
      <p>1200px</p>
      <Button onClick={fifthShowModal}>五级modal</Button>
      <Modal visible={fifthShow} title="五级modal" size="fifth"></Modal>
      <p>1500px(响应式)</p>
      <Button onClick={sixthShowModal}>六级modal</Button>
      <Modal visible={sixthShow} title="六级modal" size="sixth"></Modal>
    </>
  )
}
```
