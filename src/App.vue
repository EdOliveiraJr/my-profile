<script setup>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import BarraMenu from './components/MenuBar.vue';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import MenuBar from './components/MenuBar.vue';
import About from './components/About.vue';
import Banner from './components/Banner.vue';

const toast = useToast();

</script>
  
<template>
    <MenuBar/>
    <Banner/>
    <About/>
</template>