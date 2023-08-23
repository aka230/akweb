## akweb
akashic components for h5, web and miniapp.

## Install

```
$ npm install akweb --save
```

## Example

```
import { createElement, createRef } from 'rax';
import { Page, Flex, Text, Modal, Divider, Card, Button, Tag } from 'akweb';

function App(){
  const modalRef = createRef();

  // show modal
  const handleModalClick = () => {
    modalRef.current.show();
  }

  const footer = (
    <Flex>
      <Button>CANCEL</Button>
      <Button theme="primary" marginLeft="24rpx" rightSlot={<Tag theme="red" marginTop="-16rpx">HOT</Tag>}>SUBMIT</Button>
    </Flex>
  );

  return (
    <Page footer={footer}>
      <Card>
        <Flex>
          <Text size="14">HOT</Text>
          <Text size="14">INDEX</Text>
          <Text size="14" onClick={() => handleClick()}>CLICK ME</Text>
          <Modal ref={modalRef}><Text size="14">MODAL CONTENT</Text></Modal>
        </Flex>
        <Divider space="18" />
        <Text size="14">SKY</Text>
      </Card>
    </Page>
  );
}
```
