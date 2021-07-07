<template>
  <div id="app">
    <x-button>默认按钮</x-button>
    <x-button type="primary">主要按钮</x-button>
    <x-button type="warning">警告按钮</x-button>
    <x-button type="danger">危险按钮</x-button>
    <x-button type="success">成功按钮</x-button>
    <x-button type="info">信息按钮</x-button>

    <x-icon icon="loader-line"></x-icon>
    <x-button icon="loader-line" type="info">信息按钮</x-button>
    <x-button icon="loader-line" type="info"></x-button>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">

</style>
