<script>
	import { base } from '$app/paths';
	import Navbar from '../../lib/components/Navbar.svelte';
	import Project from '../../lib/components/Project.svelte';
</script>

<main class="text-xl m-auto w-full lg:w-1/2">
	<h1 class="text-5xl text-center font-bold text-teal-400 mb-2">Projects</h1>
	<Project
		link="https://renaissancedog.github.io/reagan-schedule"
		title="Reagan Bell Schedule"
		body="An app to keep track of the bell schedule!"
	/>
	<Project
		link="https://renaissancedog.github.io/projects/blackjack.html"
		title="Blackjack"
		body="A simple Blackjack implementation in JS."
	/>
	<Project
		link="https://github.com/renaissancedog/cp-solutions"
		title="Competitive Programming Solutions"
		body="Solutions I wrote in Java - primarily USACO, also some DSA and UIL"
	/>
	<Project
		link="https://renaissancedog.github.io/projects/cookie.html"
		title="Cookie Clicker"
		body="My first web app - written in basic JS"
	/>
</main>
