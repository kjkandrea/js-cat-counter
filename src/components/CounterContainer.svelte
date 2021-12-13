<script>
    import CatList from './presentations/CatList.svelte'
    import Counter from './presentations/Counter.svelte'

    let count = 0;

    const increment = () => count++
    const decrement = () => count >= 1 && count--
</script>

<div>
    <Counter count={count} increment={increment} decrement={decrement} />
    <CatList count={count} />
</div>