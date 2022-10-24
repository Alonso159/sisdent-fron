import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import { themePreset } from "../../src/themeConfig";

Vue.use(Vuetify);

export default new Vuetify({
  theme: themePreset.theme,
  rtl: themePreset.rtl
});
