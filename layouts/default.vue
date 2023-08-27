<script>
import TheHeader from "@/components/Navigation/TheHeader.vue";
import TheSidenav from "@/components/Navigation/TheSidenav.vue";
export default {
  components: {
    TheHeader,
    TheSidenav,
  },
  data() {
    return {
      toggleMobileMenue: false,
    };
  },
};
</script>

<template>
  <div>
    <TheHeader @sidenavToggle="toggleMobileMenue = !toggleMobileMenue" />
    <TheSidenav :show="toggleMobileMenue" @close="toggleMobileMenue = false"/>
    <Nuxt />
  </div>
</template>
