import { defineNuxtPlugin } from "#app";
import { createDynamicForms } from "@asigloo/vue-dynamic-forms";

const VueDynamicForms = createDynamicForms();


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueDynamicForms);
});
