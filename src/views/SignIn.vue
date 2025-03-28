<template>
  <section>
    <SignIn/>
    <button @click="goToSignUp">{{ SIGN_UP }}</button>
  </section>
</template>

<script setup lang="ts">
import SignIn from '../components/SignInForm.vue'
import { SIGN_UP } from "../messages"
import router from "../router"

const goToSignUp = () => router.push("/sign-up")

</script>