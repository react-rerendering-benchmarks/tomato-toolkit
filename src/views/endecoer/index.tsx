import { memo } from "react";
import { Card } from '@arco-design/web-react';
import { FC } from 'react';
const EnDecoder: FC = memo(() => {
  return <Card style={{
    height: 'calc(100vh - 104px)'
  }} bodyStyle={{
    height: '100%'
  }}>
      编解码功能
    </Card>;
});
export default EnDecoder;