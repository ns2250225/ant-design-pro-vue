<template>
  <div class="hello">
    <a-layout id="components-layout-demo-responsive" style="min-height: 100vh">
      <!-- 侧栏 -->
      <a-layout-sider
            breakpoint="lg"
            collapsedWidth="0"
            @collapse="onCollapse"
            @breakpoint="onBreakpoint"
            :style="{ height: '100vh' }"
            width='256'
          >
            
            <div class="logo">
              <h1 class="logo-text"><b>🎉ATDV运维平台🎉</b></h1>
            </div>

            <a-menu theme="dark" mode="inline">
                <a-menu-item v-for="item in permission_routers" :key="item" v-if="!item.children&&!item.hidden">
                  <a-icon type="pie-chart" />
                  <span>{{ item.name }}</span>
                </a-menu-item>

                <a-sub-menu v-for="item in permission_routers" :key="item" v-if="item.children&&!item.hidden">
                  <span slot="title"><a-icon type="mail" /><span>{{ item.meta.title }}</span></span>
                  <a-menu-item v-for="child in item.children" :key="child" v-if="!child.hidden">{{ child.meta.title }}</a-menu-item>
                </a-sub-menu>
            </a-menu>           
      </a-layout-sider>


      <a-layout>
        <!-- 顶栏导航 -->
        <a-layout-header :style="{ background: '#fff', padding: 0 }">
          <div class="header-nav-right">
            <a-dropdown style="display: inline-block; height: 100%; vertical-align: initial" >
              <span style="cursor: pointer">
                <a-avatar size="large" style="color: #f56a00; backgroundColor: #fde3cf">U</a-avatar>
              </span>
              <a-menu style="width: 150px" slot="overlay">
                <a-menu-item>
                  <a-icon type="user" />
                  <span>个人中心</span>
                </a-menu-item>
                <a-menu-item>
                  <a-icon type="setting" />
                  <span>设置</span>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item>
                  <a-button icon="poweroff" @click="logout">退出登录</a-button> 
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </a-layout-header>
        
        <!-- 主体内容 -->
        <a-layout-content :style="{ margin: '24px 16px 0' }">
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <router-view/>
          </div>
        </a-layout-content>
      
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
  },
  computed: {
    ...mapGetters([
      'permission_routers'
    ])
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    logout() {
      this.$store.dispatch('FedLogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  height: 64px;
  padding-top: 10px;
}
.logo .logo-text {
  color: aliceblue;
  text-align: center;
}
.header-nav-right {
  float: right;
  margin: 10px 10px 10px 0;
}
</style>
