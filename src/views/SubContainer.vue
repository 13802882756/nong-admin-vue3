<template>
<!-- 挂载子应用的dom元素 -->
  <div id="sub-container"></div>
</template>

<script>
import { start } from 'qiankun'
import { registerApps } from '@/utils/qiankun'
export default {
  mounted() {
    console.log('mounted');
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      registerApps()
      console.log('乾坤start')
      start({
        sandbox: {
          experimentalStyleIsolation: true // 样式隔离
        }
      })
    }
  }
}
</script>
