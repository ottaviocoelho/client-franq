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
      <p v-if="errors.username" id="username-error" class="error" aria-live="polite">
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
      <p v-if="errors.password" id="password-error" class="error" aria-live="polite">
        {{ errors.password }}
      </p>
    </div>

    <div class="field-wrapper" :class="{error: errors.confirmPassword}">
      <label for="confirmPassword">{{CONFIRM_PASSWORD}}</label>
      <input
        id="confirmPassword"
        v-model="confirmPassword"
        type="password"
        aria-describedby="confirm-password-error"
      />
      <p v-if="errors.confirmPassword" id="confirm-password-error" class="error" aria-live="polite">
        {{ errors.confirmPassword }}
      </p>
    </div>

    <button type="submit">{{SIGN_UP_CTA}}</button>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { signUp } from "../userApi"
import { PASSWORD_IS_REQUIRED, PASSWORDS_MUST_BE_SAME, UNDEFINED_ERROR, USERNAME_IS_REQUIRED, SIGN_UP_CTA, PASSWORD, CONFIRM_PASSWORD, USERNAME } from "../messages"

const username = ref("");
const password = ref("");
const confirmPassword = ref("");

const errors = ref({ username: "", password: "", confirmPassword: "" });

const validate = () => {
  errors.value = { username: "", password: "", confirmPassword: "" };

  if (!username.value) {
    errors.value.username = USERNAME_IS_REQUIRED;
  }

  if (!password.value) {
    errors.value.password = PASSWORD_IS_REQUIRED;
  }

  if (confirmPassword.value !== password.value) {
    errors.value.confirmPassword = PASSWORDS_MUST_BE_SAME;
  }
};

const handleSubmit = async (event: Event) => {
  event.preventDefault();
  validate();
  if (!errors.value.username && !errors.value.password && !errors.value.confirmPassword) {
    try {
      await signUp({
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

watch(confirmPassword, (newPassword: string) => {
  if(newPassword && errors.value.confirmPassword) {
    errors.value.confirmPassword = ""
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