<script>
    import CatList from './CatList.svelte'

    let count = 0

    const increment = () => count++
    const decrement = () => count >= 1 && count--
</script>

<div>
    <button on:click={increment}>+</button>
    <input type="number" readonly value={count}/>
    <button on:click={decrement}>_</button>
    <CatList count={count} />
</div>