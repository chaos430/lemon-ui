<template>
<div>
    <button class="lemon-button"
     :class="`theme-${theme}`">
        <slot/>
    </button>
</div>
</template>
<script lang="ts">

export default {
   props:{
       theme:{
           type: String,
           default: 'button'
       } 
   }
}
</script>