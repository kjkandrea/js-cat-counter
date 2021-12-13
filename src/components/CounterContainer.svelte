<script>
    import { count, increment, decrement } from '../store/count.js';
    import CatList from './presentations/CatList.svelte'
    import Counter from './presentations/Counter.svelte'
</script>

<div>
    <Counter count={$count} increment={increment} decrement={decrement} />
    <CatList count={$count} />
</div>