<template>
  <form @submit="handleSubmit" aria-labelledby="form-title">
    <h2 id="form-title">Login</h2>

    <div class="field-wrapper" :class="{error: errors.username}">
      <label for="username">{{USERNAME}}</label>
      <input
        id="username"
        v-model="username"
        type="text"
        autocomplete="username"
        aria-describedby="username-error"
      />
      <p id="username-error" class="error" aria-live="polite">
        {{ errors.username }}
      </p>
    </div>

    <div class="field-wrapper" :class="{error: errors.password}">
      <label for="password">{{PASSWORD}}</label>
      <input
        id="password"
        v-model="password"
        type="password"
        autocomplete="current-password"
        aria-describedby="password-error"
      />
      <p id="password-error" class="error" aria-live="polite">
        {{ errors.password }}
      </p>
    </div>

    <button type="submit">{{SIGN_IN_CTA}}</button>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { User } from "../model/financeData"
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

watch(username, (newUsername: string) => {
  if(newUsername && errors.value.username) {
    errors.value.username = ""
  }
})

watch(password, (newPassword: string) => {
  if(newPassword && errors.value.password) {
    errors.value.password = ""
  }
})

</script>

<style scoped>

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 8px;

  margin-bottom: 16px;
}

.field-wrapper {
  min-width: 190px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

.field-wrapper label {
  font-size: 14px;
  color: #909090;
}

.field-wrapper p {
  font-size: 12px;
  margin: 0px;
  min-height: 18px;
}

.error label, .error p {
  color: #f25e5e
}

</style>