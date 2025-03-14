<template>
  <div id="contacts" class="contacts">
    <Toast/>
    <h2>Contact me</h2>
    <div class="social">
      <a href="https://www.linkedin.com/in/edvaldo-oliveira-14687b101/" target="_blank"><img
          src="../assets/social/linkedin_white.png" alt=""></a>
      <a href="https://www.instagram.com" target="_blank"><img src="../assets/social/insta_white.png" alt=""></a>
      <a href="https://wa.me/+5585999107495" target="_blank"><img src="../assets/social/whatsapp_white.png" alt=""></a>
      <a href="https://t.me/feojunior" target="_blank"><img src="../assets/social/telegram_white.png" alt=""></a>
    </div>
    <div class="contact-form">
      <div class="p-fluid">
        <label for="name">Nome</label>
        <InputText v-model="name" type="text" placeholder="Nome" />
        <Message v-if="!name" severity="error" size="small" :invalid="!name" variant="sample">Name required</Message>
      </div>
      <div class="p-fluid">
        <label for="email">E-mail</label>
        <InputText v-model="email" type="email" placeholder="e-mail" :invalid="!email" />
        <Message v-if="!email" severity="error" size="small" variant="sample">E-mail required</Message>
      </div>
      <div class="p-fluid">
        <label for="message">Message</label>
        <Textarea v-model="message" type="text" placeholder="Mensagem" :invalid="!message" />
        <Message v-if="!message" severity="error" size="small" variant="sample">Message required</Message>
      </div>
      <Button type=submit label="Enviar" @click="sendEmail" />
    </div>
  </div>
</template>
<script>
import Toast from 'primevue/toast';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import Message from 'primevue/message';

export default {
  name: 'Contacts',
  components: {
    Button,
    InputText,
    Message,
    Textarea,
    Toast
  },
  data() {
    return {
      name: 'Nome',
      email: 'e-mail',
      message: 'Mensagem',
    }
  },
  methods: {
    sendEmail() {
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Message:', this.message);

      this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Mensagem enviada', life: 3000 });
    }
  }
}
</script>
