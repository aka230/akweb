## akweb

## Install

```
$ npm install akweb --save
```

## Usage

```
import { Flex, Text, Image, Tab } from 'akweb';
```

## API

### Props

|name|type|default|describe|
|:---------------|:--------|:----|:----------|
|name|String|''|describe|

### Function

|name|param|return|describe|
|:---------------|:--------|:----|:----------|
|name|Object|/|describe|

## Example

```
import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import RaxExample from 'akweb';

render(<RaxExample />, document.body, { driver: DriverUniversal });
```
