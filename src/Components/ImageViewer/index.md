---
nav:
title: Components
path: /components
---

## ImageViewer


```tsx
import React from 'react';
import { ImageViewer, 
  AddSvg,
  Delete,
  Left,
  Right
} from 'dumi-ui';

export default () => {
  const imageList=[
    {
      id:1,
      url:"http://img.touxiangwu.com/2020/3/qAVNbm.jpeg",
      alt:"zhh-1"
    },
    {
      id:2,
      url:"http://img.touxiangwu.com/2020/3/B7rmqu.jpeg",
      alt:"zhh-2"
    },
    {
      id:3,
      url:"http://img.touxiangwu.com/2020/3/nIFRv2.jpeg",
      alt:"zhh-3"
    },
    {
      id:4,
      url:"http://img.touxiangwu.com/2020/3/AJNFNv.jpeg",
      alt:"zhh-4"
    }
  ]
  return (
  <>
          <ImageViewer imageList={imageList}
                       imgIndex={0}
                       url={imageList[0].url}
                       alt={imageList[0].alt}
          ></ImageViewer>
    
  </>
)}
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
