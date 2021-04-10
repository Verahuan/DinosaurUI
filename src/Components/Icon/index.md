---
nav:
title: Components
path: /components
---

## icon

### icon改变颜色:

```tsx
import React from 'react';
import { Button, 
  AddSvg,
  Delete,
  Left,
  Right
} from 'dumi-ui';

export default () => {
  return (
  <>
    <AddSvg iconcolor="red"/>
    <Delete iconcolor="orange"/>
    <Left iconcolor="white"/> 
    <Right iconcolor="white"/>
  </>
)}
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
