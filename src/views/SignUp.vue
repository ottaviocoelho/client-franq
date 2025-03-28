<template>
  <section>
    <SignUp/>
    <button @click="goToSignIn">{{ SIGN_IN }}</button>
  </section>
</template>

<script setup lang="ts">
import SignUp from '../components/SignUpForm.vue';
import { SIGN_IN } from "../messages"
import router from "../router"

const goToSignIn = () => router.push("/sign-in")

</script>