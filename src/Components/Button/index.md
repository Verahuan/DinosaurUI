---
nav:
title: Components
path: /components
---

## Button

### primary样式:

```tsx
import React from 'react';
import { Button ,
  AddSvg,
  Delete} from 'dumi-ui';

export default () => {
  return (
  <>
    <br/><p>primary-large-disabled</p>
    <Button btnType='primary' size="lg" disabled></Button>
    <br/><p>primary</p>
    <Button btnType='primary'></Button>
    <br/><p>primary-small</p>
    <Button btnType='primary' size="sm"></Button>
    <br/><p>subtle-disabled</p>
    <Button btnType='subtle' size="sm" disabled></Button>
    <br/><p>subtle-small</p>
    <Button btnType='subtle' size="sm" ></Button>
    <br/><p>secondary</p>
    <Button btnType='secondary' size="sm"></Button>  
    <br/><p>secondary-icon</p>
    <Button btnType='secondary' size="lg"  icon={<AddSvg/> } disabled></Button>
    <br/><p>common-large</p>
    <Button btnType='common' size="lg" icon={<AddSvg/> } disabled></Button>   

  </>
)}
```
### primary 中添加icon:

```tsx
import React from 'react';
import { Button, AddSvg,
  Delete} from 'dumi-ui';

export default () => {
  return (
  <>
    <Button btnType='primary' size="lg" icon={<AddSvg/>}></Button>
    <br/><p></p>
    <Button btnType='primary' icon={<AddSvg/>}></Button>
    <br/><p></p>
    <Button btnType='primary' size="sm" icon={<AddSvg/>}></Button>
    <br/><p>text-small</p>
    <Button btnType='text' size="sm">文字按钮</Button>
    <br/><p>text-large</p>
    <Button btnType='text' size="lg">文字按钮</Button>
    <br/><p>textNeutral-large</p>
    <Button btnType='textNeutral' size="lg">文字按钮</Button>
    <br/><p>subtleNeutral-large</p>
    <Button btnType='subtleNeutral' size="lg">文字按钮</Button>
    <br/><p>menu</p>
    <Button btnType='menu' size="lg"></Button>
    <br/><p>iconPosition="right"</p>
    <Button size="lg" iconPosition="right" icon={<Delete/>}></Button>
  </>
)}
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
