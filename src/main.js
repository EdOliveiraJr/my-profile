import { createApp } from "vue";
import "./style/index.scss";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.mount("#app");
