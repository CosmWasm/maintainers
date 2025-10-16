---
sidebar_position: 2
---

# Heap profiling

:::warning

This page needs review, because this procedure does not work anymore, see [\#2].

:::

The [DHAT] tool can be used for heap profiling to detect memory leaks or excessive memory usage.
This tool is currently set up in the [cosmwasm-vm package].
It was used to debug this [memory usage bug] in CosmWasm 1.3 and 1.4.

## Getting started

1. Navigate to the root directory of the [cosmwasm] repository and run:
   ```
   cargo run --features dhat-heap --example heap_profiling --release
   ```
2. Open `dhat-heap.json` in [DHAT Viewer].
3. Enjoy

## Reading the output

- t<sub>gmax</sub> is the time of the highest memory usage
- t<sub>end</sub> is the time of the process end

## Customising

- The `--runtime` argument allows for longer testing periods, e.g. for running tests for 2 minutes do
  ```
  cargo run --features dhat-heap --example heap_profiling --release -- --runtime 120
  ```
- In `fn contracts()` you can change the contracts that are executed

## References

- [DHAT: a dynamic heap analysis tool][DHAT]
- [DHAT Viewer]
- [dhat-rs]

[DHAT]: https://valgrind.org/docs/manual/dh-manual.html
[cosmwasm-vm package]: https://github.com/CosmWasm/cosmwasm/blob/d8f759e8d448cc9d86ce7e875cd44f9303a6bee5/packages/vm/Cargo.toml#L63-L65 
[memory usage bug]: https://github.com/CosmWasm/cosmwasm/issues/1978
[cosmwasm]: https://github.com/CosmWasm/cosmwasm
[DHAT Viewer]: https://nnethercote.github.io/dh_view/dh_view.html
[dhat-rs]: https://crates.io/crates/dhat
[\#2]: https://github.com/CosmWasm/maintainers/issues/2
