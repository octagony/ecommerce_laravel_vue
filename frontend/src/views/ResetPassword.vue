<template>
  <GuestLayout title="Set new password">
    <form class="space-y-6" method="POST" @submit.prevent="">
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <label
            for="newPassword"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Set new password</label
          >
          <div class="mt-2">
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="mt-2">
          <div class="flex items-center justify-between">
            <label
              for="confirmPassword"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Confirm new password</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full mt-4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save new password
          </button>
        </div>
      </div>
    </form>
  </GuestLayout>
</template>

<script setup lang="ts">
import GuestLayout from "../components/GuestLayout.vue";
</script>

<style scoped></style>
