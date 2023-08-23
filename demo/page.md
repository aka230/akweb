---
title: Page
order: 1
---

Page usage

```jsx
import { createElement, createRef } from 'rax';
import { Page, Flex, Text, Modal, Divider, Card, Button, Tag } from 'akweb';

function App(){
  const modalRef = createRef();

  const handleClick = () => {
    modalRef.current.show();
  }

  return (
    <Page
      footer={<Flex><Button>CANCEL</Button><Button theme="primary" marginLeft="24rpx" rightSlot={<Tag theme="red" marginTop="-16rpx">HOT</Tag>}>SUBMIT</Button></Flex>}
      bodyStyle={{ padding: '24rpx' }}
    >
      <Card>
        <Flex>
          <Text size="14">TES</Text>
          <Text size="14">TES</Text>
          <Text size="14" onClick={() => handleClick()}>CLICK ME</Text>
          <Modal ref={modalRef}><Text size="14">MODAL CONTENT</Text></Modal>
        </Flex>
        <Divider space="18" />
        <Text size="14">TES</Text>
      </Card>
    </Page>
  );
}

export default App;
```