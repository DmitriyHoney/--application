<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input 
          id="email" 
          type="text"  
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }"
        />
        <label for="email">Email</label>
        <small 
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >
          Поле Email не должно быть пустым
        </small>
        <small 
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
        >
          Введите корректный email
        </small>
      </div>
      <div class="input-field">
        <input 
          id="password" 
          type="password"  
          v-model.trim="password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength) }"
        />
        <label for="password">Пароль</label>
        
        <small 
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >
          Введите пароль
        </small>
        <small 
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.minLength"
        >
          Пароль должен быть не менее {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться1</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import messages from '@/utils/messages'
import Vue from 'vue';
import {email, minLength, required} from 'vuelidate/lib/validators'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: '',
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)}
  },
  mounted() {
    if (messages[this.$route.query.messages])
      this.$message(messages[this.$route.query.messages])
  },
  methods: {
    submitHandler() {
      console.log('www', this.$v)
      if (this.$v.$invalid) {
        this.$v.$touch();
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      };
      console.log(formData)
      this.$router.push({path: '/home'})
    }
  }
};
</script>

<style>
</style>
