<script>
    export let count;
    export let increment
    export let decrement
</script>

<div>
    <button on:click={increment}>+</button>
    <input type="number" readonly value={count}/>
    <button on:click={decrement}>_</button>
</div>