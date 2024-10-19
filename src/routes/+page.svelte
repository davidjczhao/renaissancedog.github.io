<script>
  import { base } from '$app/paths';
  import Navbar from "../lib/components/Navbar.svelte";
  import Row from "../lib/components/Row.svelte";
</script>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>William Liu</title>
</head>
<body class="bg-gray-900 pb-4">
  <Navbar {base}/>
  <main class="text-gray-100 text-xl m-auto w-full lg:w-1/2">
    <h1 class="text-teal-400 mb-4 text-5xl text-center font-bold">About Me!</h1>
    <Row title="My Background" body="I am a sophomore at Ronald Reagan High School in San Antonio, Texas. Welcome to my website!" />
    <Row title="My Academic Interests" body="I am interested in mathematics (combinatorics and probability theory in particular) and computer science." />
    <Row title="My Hobbies" body="In my free time, I like to read, play violin, swim, play video games and sleep." />
  </main>
</body>
</html>
