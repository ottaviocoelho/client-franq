<template>
  <form @submit="handleSubmit" aria-labelledby="form-title">
    <h2 id="form-title">Login</h2>

    <div>
      <label for="username">{{USERNAME}}</label>
      <input
        id="username"
        v-model="username"
        type="text"
        autocomplete="username"
        aria-describedby="username-error"
      />
      <p v-if="errors.username" id="username-error" class="error" aria-live="polite">
        {{ errors.username }}
      </p>
    </div>

    <div>
      <label for="password">{{PASSWORD}}</label>
      <input
        id="password"
        v-model="password"
        type="password"
        autocomplete="current-password"
        aria-describedby="password-error"
      />
      <p v-if="errors.password" id="password-error" class="error" aria-live="polite">
        {{ errors.password }}
      </p>
    </div>

    <button type="submit">{{SIGN_IN_CTA}}</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { User } from "../models"
import { signIn } from "../userApi"
import { PASSWORD, SIGN_IN_CTA, UNDEFINED_ERROR, USERNAME } from "../messages"

const username = ref("");
const password = ref("");
const errors = ref<User>({ username: "", password: "" });

const validate = () => {
  errors.value = { username: "", password: "" };

  if (!username.value) {
    errors.value.username = "O nome de usuário é obrigatório.";
  }

  if (!password.value) {
    errors.value.password = "A senha é obrigatória.";
  }
};

const handleSubmit = async (event: Event) => {
  event.preventDefault();
  validate();
  if (!errors.value.username && !errors.value.password) {
    try {
      await signIn({
        username: username.value,
        password: password.value
      })
    } catch (error: any) {
      if(error.message) {
        alert(error.message)
      } else {
        alert(UNDEFINED_ERROR)
      }
    }
    
  }
};
</script>