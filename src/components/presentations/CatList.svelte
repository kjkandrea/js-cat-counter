<script>
    export let count;
</script>

<ul>
    {#each {length: count} as _}
        <li>🐈</li>
    {/each}
</ul>