<template>
  <div class="flex justify-between">
    <h1 class="text-4xl font-black text-gray-800">Entre na sua conta</h1>
    <button
      @click="close"
      class="text-4xl text-gray-600 focus:outline-line">
      &times;
    </button>
  </div>

  <div class="mt-16">
    <form @submit.prevent="handleSubmit">
      <label class="block">
        <span class="text-lg font-medium text-gray-800">E-mail</span>
        <input
          v-model="state.email.value"
          :class="{
            'border-brand-ranger': !!state.email.errorMessage
          }"
          type="email"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          placeholder="lu@lu.com"/>
          <span class="block font-medium text-brand-danger" v-if="!!state.email.errorMessage">
            {{ state.email.errorMessage}}
          </span>
      </label>
      <label class="block">
        <span class="text-lg font-medium text-gray-800">E-mail</span>
        <input
          v-model="state.password.value"
          :class="{
            'border-brand-ranger': !!state.password.errorMessage
          }"
          type="password"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          placeholder="lu@lu.com"/>
          <span class="block font-medium text-brand-danger" v-if="!!state.password.errorMessage">
            {{ state.password.errorMessage}}
          </span>
      </label>
      <button
      :disabled="state.isLoading"
      type="submit"
      :class="{'opacity-50':state.isLoading}"
        class="px-8 py-3 mt-10 text-white transition-all duration-150 rounded-full text-2lg bg-brand-main focus:outline-none">
      >Entrar</button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useField } from 'vuelidate'
import useModal from '../../hooks/useModal'
import { validateEmptyAndLenght3, validateEmptyAndEmail } from '../../utils/validators'
export default {
  setup () {
    const {
      value: emailValue,
      errorMessage: emailErrorMessage
    } = useField('email', validateEmptyAndEmail)
    const {
      value: passwordValue,
      errorMessage: passwordErrorMessage
    } = useField('password', validateEmptyAndLenght3)
    const modal = useModal()
    const state = reactive({
      hadErros: false,
      isLoading: false,
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
      }
    })
    function handleSubmit () {

    }
    return {
      state,
      close: modal.close,
      handleSubmit
    }
  }

}
</script>

<style>

</style>
