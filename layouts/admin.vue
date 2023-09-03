<script>
import HeaderAdmin from "../components/Navigation/HeaderAdmin.vue";
import SideNavAdmin from "../components/Navigation/SideNavAdmin.vue";
export default {
  components: {
    HeaderAdmin,
    SideNavAdmin,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <HeaderAdmin />
    <SideNavAdmin />
    <Nuxt />
  </div>
</template>
