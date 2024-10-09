import { memo } from "react";
import { Button, Radio } from '@arco-design/web-react';
export const renderRadio = memo(() => {
  return <>
    <Radio value={true}>
      {({
        checked
      }) => <Button type={checked ? 'primary' : 'default'}>开启</Button>}
    </Radio>
    <Radio value={false}>
      {({
        checked
      }) => <Button type={checked ? 'primary' : 'default'}>关闭</Button>}
    </Radio>
  </>;
});