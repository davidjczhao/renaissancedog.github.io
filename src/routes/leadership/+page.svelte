<script>
  import { base } from '$app/paths';
  import Navbar from "../../lib/components/Navbar.svelte";
  import Row from "../../lib/components/Row.svelte";
</script>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>William Liu</title>
</head>
<body class="bg-gray-900 pb-4">
  <Navbar {base}/>
  <main class="text-xl m-auto w-full lg:w-1/2">
    <h1 class="text-5xl text-center font-bold text-teal-400 mb-2">Leadership Positions</h1>
    <Row title="UIL Mathematics team captain (2024)" body="Leads and coaches the members of our team"/>
    <Row title="San Antonio Math Circle Co-Founder (2024)" body="Founded a competitive math circle with friends"/>
    <Row title="Algebra Club Leader (2024)" body="Directs an algebra program at local library targeted at middle schoolers"/>
    <Row title="Webmaster, Reagan UIL Team (2024)" body="Maintains team website"/>
    <Row title="Co-Founder, Renaissance Dog Walkers (2022-2023)" body="Started and managed a dog-walking business with friends"/>
  </main>
</body>