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
    <Button btnType='primary' size="lg" disabled></Button>
    <p></p>
    <Button btnType='primary'></Button>
    <p></p>
    <Button btnType='primary' size="sm"></Button>
    <p></p>
    <Button btnType='secondary' size="sm"></Button>
    <p>轻浅</p>
    <Button btnType='subtle' size="sm" disabled></Button>
    <p></p>
    <Button btnType='subtle' size="sm" ></Button>
    <p></p>
    <Button btnType='secondary' size="lg"  icon={<AddSvg/> } disabled></Button>
    <p></p>
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
    <p></p>
    <Button btnType='primary' icon={<AddSvg/>}></Button>
    <p></p>
    <Button btnType='primary' size="sm" icon={<AddSvg/>}></Button>
  </>
)}
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
