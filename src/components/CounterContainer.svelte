<script>
    import { count } from '../store/count.js';
    import CatList from './presentations/CatList.svelte'
    import Counter from './presentations/Counter.svelte'

    let count_value;

    count.subscribe(value => count_value = value)

    const increment = () => count.update(count => ++count)
    const decrement = () => count.update(count => count >= 1 ? --count : count)
</script>

<div>
    <Counter count={count_value} increment={increment} decrement={decrement} />
    <CatList count={count_value} />
</div>