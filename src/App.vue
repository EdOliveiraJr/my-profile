<template>
    <MenuBar/>
    <Banner/>
    <About/>
    <Contacts/>
    <Footer/>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button'
import Toast from 'primevue/toast'

import BarraMenu from './components/MenuBar.vue';
import { useToast } from 'primevue/usetoast';
import MenuBar from './components/MenuBar.vue';
import About from './components/About.vue';
import Banner from './components/Banner.vue';
import Footer from './components/Footer.vue';
import Contacts from './components/Contacts.vue';

const toast = useToast();

</script>
  