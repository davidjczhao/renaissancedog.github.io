<script>
  import { base } from '$app/paths';
  import Navbar from "../../lib/components/Navbar.svelte";
  import Row from "../../lib/components/Row.svelte";
</script>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>William Liu</title>
</head>
<body class="bg-gray-900 pb-4">
  <Navbar {base}/>
  <main class="text-xl m-auto w-full lg:w-1/2">
    <h1 class="text-5xl text-center font-bold text-teal-400 mb-8">Awards</h1>
    <div class="text-center md:text-left">
    <h2 class="text-4xl text-teal-400 mb-2">Mathematical Awards</h2>
    <Row title="AIME Qualifier and top 50% (2023/24)" body="Was top 7% of all AMC 10 test takers"/>
    <Row title="1st Place, AMC 10, Reagan High School (2024)" body="Scored highest on the AMC 10 at Reagan"/>
    <Row title="UIL Mathematics, Number Sense and Calculator Applications Regional Qualifier (2024)" body="Was top 7% of all AMC 10 test takers"/>
    <h2 class="text-4xl text-teal-400 mb-2">Computer Science Awards</h2>
    <Row title="UIL Computer Science Regional Qualifier (2024)" body="Member of the top team in District competitions"/>
    <Row title="USACO Bronze (2024)" body="Participated in programming and problem-solving olympiad"/>
    <h2 class="text-4xl text-teal-400 mb-2">Academic Awards</h2>
    <Row title="PSAT 8/9 Perfect Scorer (2024)" body="Scored 1440 on nationally administered test"/>
    <Row title="Straight A's (2020-2024)" body="All semester grades are 90 or higher from 6th grade onwards"/>
    <h2 class="text-4xl text-teal-400 mb-2">Musical Awards</h2>
    <Row title="TSSEC Qualifier (2024)" body="Qualified to play at state solo competition"/>
    <Row title="Region Orchestra Member (2021-2024)" body="Auditioned into All-Region orchestra 4 years in a row"/>
    </div>
    </main>
  </body>
  </html>
  