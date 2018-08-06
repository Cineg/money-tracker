<template>
    <v-layout justify-center>
      <v-flex md6 xs10 elevation-4 style="padding: 0"> 

          <v-toolbar color="blue">
            <v-toolbar-title>
              {{title}}
            </v-toolbar-title>
            
          </v-toolbar >
        
        <v-fade-transition>
            <slot name="alert"></slot>
        </v-fade-transition>
        
        <v-form ref="form" lazy-validation class="form">
        <slot name="form"></slot>
        </v-form>

      </v-flex>
    </v-layout>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
.form {
  padding: 15px;
}
</style>

