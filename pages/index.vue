<template>
	<div class="flex">
		<div class="row">
			{{ title }}
		</div>
		<Calendar v-model="date" />
		<Card>
			<template #title>{{ title }}</template>
			<template #subtitle>{{ subtitle }}</template>
		</Card>
	</div>
</template>

<script setup lang="ts">
const title = ref('hello');
const subtitle = ref('hello1');
const date = ref();
</script>

<style scoped lang="scss"></style>
