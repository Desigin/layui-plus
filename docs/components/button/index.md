# Button 按钮

按钮用于开始一个即时操作。

### 基础用法
使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

:::demo

```vue
<template>
<div class="lay-btn-container">
    <lay-button type='default'>原始按钮</lay-button>
    <lay-button type='primary'>默认按钮</lay-button>
    <lay-button type='normal'>百搭按钮</lay-button>
    <lay-button type='warning'>暖色按钮</lay-button>
    <lay-button type='danger'>警告按钮</lay-button>
    <lay-button type='success'>成功按钮</lay-button>
    <lay-button type='info'>信息按钮</lay-button>
</div>
</template>
```
:::
### 次要按钮

:::demo

```vue
<template>
<div class="lay-btn-container">
  <lay-button type='default' plain>原始按钮</lay-button>
  <lay-button type='primary' plain>默认按钮</lay-button>
  <lay-button type='normal' plain>百搭按钮</lay-button>
  <lay-button type='warning' plain>暖色按钮</lay-button>
  <lay-button type='danger' plain>警告按钮</lay-button>
  <lay-button type='success' plain>成功按钮</lay-button>
  <lay-button type='info' plain>信息按钮</lay-button>
</div>
</template>
```
:::

### 禁用按钮

:::demo

```vue
<template>
<div class="lay-btn-container">
  <lay-button disabled type='default'>原始按钮</lay-button>
  <lay-button disabled type='primary'>默认按钮</lay-button>
  <lay-button disabled type='normal'>百搭按钮</lay-button>
  <lay-button disabled type='warning'>暖色按钮</lay-button>
  <lay-button disabled type='danger'>警告按钮</lay-button>
  <lay-button disabled type='success'>成功按钮</lay-button>
  <lay-button disabled type='info'>信息按钮</lay-button>
</div>
</template>
```
:::


### 按钮尺寸

:::demo
```vue
<template>
  <div class="lay-btn-container">
    <lay-button type='primary' size="lg">大型按钮</lay-button>
    <lay-button type='primary' size="md">默认按钮</lay-button>
    <lay-button type='primary' size="sm">小型按钮</lay-button>
    <lay-button type='primary' size="xs">迷你按钮</lay-button>
</div>
  <div class="lay-btn-container">
    <lay-button type='primary' fluid>流体按钮（即宽度最大化适应）</lay-button>
</div>

</template>
```
:::


### 圆角按钮
用于标识系统中的关键操作，例如购买场景。
:::demo
```vue
<template>
  <div class="lay-btn-container">
    <lay-button type='default' round>原始按钮</lay-button>
    <lay-button type='primary' round>默认按钮</lay-button>
    <lay-button type='normal' round>百搭按钮</lay-button>
    <lay-button type='warning' round>暖色按钮</lay-button>
    <lay-button type='danger' round>警告按钮</lay-button>
    <lay-button type='success' round>成功按钮</lay-button>
    <lay-button type='info' round>信息按钮</lay-button>
</div>
<div class="lay-btn-container">
    <lay-button type='default' circle>A</lay-button>
    <lay-button type='primary' circle>B</lay-button>
    <lay-button type='normal' circle>C</lay-button>
    <lay-button type='warning' circle>D</lay-button>
    <lay-button type='danger' circle>E</lay-button>
    <lay-button type='success' circle>F</lay-button>
    <lay-button type='info' circle>G</lay-button>
</div>
</template>
```
:::


### 按钮组
以按钮组的方式出现，常用于多项类似操作。<br>
使用 `<lay-button-group>` 对多个按钮分组。

:::demo

```vue
<template>
<lay-button-group>
    <lay-button size="sm" type='primary'>Previous Page</lay-button>
    <lay-button size="sm" type='primary'> Next Page</lay-button>
</lay-button-group>

<lay-button-group>
    <lay-button size="sm" type='primary'>Previous Page</lay-button>
    <lay-button size="sm" type='primary'> Next Page</lay-button>
</lay-button-group>
</template>

```
:::

### 文字按钮
（该功能正在开发中）
:::demo
```vue
<template>
<div class="lay-btn-container">
  <lay-button text type="primary">Text</lay-button>
  <lay-button text>Text dark</lay-button>
  <lay-button text disabled>Disabled</lay-button>
</div>

</template>
```
:::

### 加载中状态
（该功能正在开发中）
:::demo
```vue
<template>

</template>
```
:::

### 图标按钮
（该功能正在开发中）

:::demo
```vue
<template>
 
</template>
```
:::

### API
lay-button 参数
|   参数    |                             类型                             |   默认    | 说明                             |
| :-------: | :----------------------------------------------------------: | :-------: | :------------------------------- |
|   type    |              `'button' \| 'submit' \| 'reset'`               | 'button'  | 可选，按钮类型                   |
| btnStyle  | `'common' \| 'primary' \| 'text' \| 'text-dark' \| 'danger'` | 'primary' | 可选，按钮风格                   |
| position  |               `'left' \| 'right' \| 'default'`               | 'default' | 可选，按钮位置                   |
|   size    |                `'lg' \| 'md' \| 'sm' \| 'xs'`                |   'md'    | 可选，按钮大小                   |
| bordered  |                          `boolean`                           |   false   | 可选，是否有边框                 |
|   icon    |                           `string`                           |    --     | 可选，点击背景触发的事件         |
|   width   |                           `string`                           |    --     | 可选，弹出框宽度(e.g '300px')    |
| disabled  |                          `boolean`                           |   false   | 可选，是否禁用button             |

lay-button 事件
|  参数   |             类型              | 默认  | 说明           |
| :-----: | :---------------------------: | :---: | :------------- |
| onClick | `(event: MouseEvent) => void` |  --   | 可选，点击事件 |

