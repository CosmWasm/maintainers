---
title: Versions
sidebar_position: 25
---

# Versions

:::note[Legend]

- **Date** - release date,
- **wasmd** - version of the _**[wasmd]**_ component,
- **wasmvm** - version of the _**[wasmvm]**_ component,
- **std** - version of the _**[cosmwasm-std]**_ component,
- **SDK** - version of the _**[Cosmos SDK]**_ component,
- **IBC** - version of the _**[IBC]**_ component.
- **wasmer** - version of the _**[wasmer]**_ component.

:::

## Supported versions

### `0.70.x` series

|    Date    |  wasmd  | wasmvm |  std   |   SDK   |   IBC   | wasmer | 
|:----------:|:-------:|:------:|:------:|:-------:|:-------:|:------:| 
| 2026-05-13 | v0.70.1 | v3.0.5 | v3.0.6 | v0.54.0 | v11.0.0 | =5.0.6 |

:::info[Accepted changes]

- wasmvm v3.0.**x** `patches`
- std v3.0.**x** `patches`
- SDK v0.54.**x** `patches`
- IBC v11.0.**x** `patches`

:::

:::tip[Rust versions]

|           |    min     |    max     |
|-----------|:----------:|:----------:|
| packages  | **1.82.0** |    n/a     |
| contracts | **1.82.0** | **1.82.0** |

:::

### `0.61.x` series

|    Date    |  wasmd   | wasmvm |  std   |   SDK   |   IBC   | wasmer | 
|:----------:|:--------:|:------:|:------:|:-------:|:-------:|:------:| 
| 2026-05-13 | v0.61.12 | v3.0.5 | v3.0.6 | v0.53.6 | v10.5.0 | =5.0.6 |

:::info[Accepted changes]

- wasmvm v3.0.**x** `patches`
- std v3.0.**x** `patches`
- SDK v0.53.**x** `patches`
- IBC v10.5.**x** `patches`

:::

:::tip[Rust versions]

|           |    min     |    max     |
|-----------|:----------:|:----------:|
| packages  | **1.82.0** |    n/a     |
| contracts | **1.82.0** | **1.82.0** |

:::

### `0.60.x` series

|    Date    |  wasmd  | wasmvm |  std   |   SDK   |   IBC   | wasmer |
|:----------:|:-------:|:------:|:------:|:-------:|:-------:|:------:|
| 2026-05-13 | v0.60.7 | v2.3.3 | v2.3.3 | v0.53.5 | v10.5.0 | =4.3.7 |

:::info[Accepted changes]

- wasmvm v2.**x**.**x** `features` `patches` 
- std v2.**x**.**x** `features` `patches`
- SDK v0.53.**x** `patches`
- IBC v10.0.**x** `patches`

:::

:::tip[Rust versions]

|           |    min     |    max     |
|-----------|:----------:|:----------:|
| packages  | **1.82.0** |    n/a     |
| contracts | **1.81.0** | **1.81.0** |

:::

### `0.54.x` series

|    Date    |  wasmd  | wasmvm |  std   |   SDK    |  IBC   | wasmer | 
|:----------:|:-------:|:------:|:------:|:--------:|:------:|:------:| 
| 2026-05-13 | v0.54.8 | v2.2.7 | v2.2.8 | v0.50.15 | v8.8.0 | =4.3.7 |    

:::info[Accepted changes]

- wasmvm v2.2.**x** `patches`
- std v2.2.**x** `patches`
- SDK v0.50.**x** `patches`
- IBC v8.4.**x**  `patches`

:::

:::tip[Rust versions]

|           |    min     |    max     |
|-----------|:----------:|:----------:|
| packages  | **1.82.0** |    n/a     |
| contracts | **1.81.0** | **1.81.0** |

:::

## Not supported versions

| Date       | wasmd    | wasmvm | std    | SDK      | IBC     | wasmer | 
|------------|----------|--------|--------|----------|---------|:------:|
| 2026-04-24 | v0.70.0  | v3.0.4 | v3.0.5 | v0.54.0  | v11.0.0 | =5.0.6 |
| 2026-04-24 | v0.61.11 | v3.0.4 | v3.0.5 | v0.53.6  | v10.5.0 | =5.0.6 |
| 2026-04-01 | v0.61.10 | v3.0.3 | v3.0.4 | v0.53.6  | v10.5.0 | =5.0.6 |
| 2026-03-18 | v0.61.9  | v3.0.3 | v3.0.4 | v0.53.6  | v10.5.0 | =5.0.6 |
| 2026-02-11 | v0.61.8  | v3.0.3 | v3.0.4 | v0.53.5  | v10.5.0 | =5.0.6 |
| 2026-01-29 | v0.61.7  | v3.0.2 | v3.0.2 | v0.53.5  | v10.5.0 | =5.0.6 |
| 2025-11-05 | v0.61.6  | v3.0.2 | v3.0.2 | v0.53.4  | v10.3.0 | =5.0.6 |
| 2025-11-04 | v0.61.5  | v3.0.2 | v3.0.2 | v0.53.4  | v10.3.0 | =5.0.6 |
| 2025-08-29 | v0.61.4  | v3.0.2 | v3.0.2 | v0.53.4  | v10.3.0 | =5.0.6 | 
| 2025-08-27 | v0.61.3  | v3.0.1 | v3.0.1 | v0.53.4  | v10.3.0 | =5.0.6 | 
| 2025-07-29 | v0.61.2  | v3.0.0 | v3.0.0 | v0.53.4  | v10.3.0 | =5.0.6 | 
| 2025-07-08 | v0.61.1  | v3.0.0 | v3.0.0 | v0.53.3  | v10.3.0 | =5.0.6 | 
| 2025-06-24 | v0.61.0  | v3.0.0 | v3.0.0 | v0.53.0  | v10.3.0 | =5.0.6 |
| 2026-04-01 | v0.60.6  | v2.3.2 | v2.3.2 | v0.53.5  | v10.5.0 | =4.3.7 |
| 2026-02-11 | v0.60.5  | v2.3.2 | v2.3.2 | v0.53.5  | v10.5.0 | =4.3.7 |
| 2026-01-29 | v0.60.4  | v2.3.1 | v2.3.0 | v0.53.5  | v10.5.0 | =4.3.7 |
| 2025-12-11 | v0.60.3  | v2.3.1 | v2.3.0 | v0.53.0  | v10.0.0 | =4.3.7 |
| 2025-11-05 | v0.60.2  | v2.2.4 | v2.2.2 | v0.53.0  | v10.0.0 | =4.3.7 | 
| 2025-06-10 | v0.60.1  | v2.2.4 | v2.2.2 | v0.53.0  | v10.0.0 | =4.3.7 | 
| 2025-05-27 | v0.60.0  | v2.2.1 | v2.2.0 | v0.53.0  | v10.0.0 | =4.3.7 |
| 2025-06-10 | v0.55.1  | v2.2.4 | v2.2.2 | v0.50.12 | v10.0.0 | =4.3.7 | 
| 2025-03-11 | v0.55.0  | v2.2.1 | v2.2.0 | v0.50.12 | v10.0.0 | =4.3.7 |
| 2026-04-01 | v0.54.7  | v2.2.6 | v2.2.7 | v0.50.15 | v8.8.0  | =4.3.7 |
| 2026-02-11 | v0.54.6  | v2.2.6 | v2.2.7 | v0.50.15 | v8.8.0  | =4.3.7 |
| 2026-01-29 | v0.54.5  | v2.2.5 | v2.2.3 | v0.50.15 | v8.8.0  | =4.3.7 |
| 2025-12-19 | v0.54.4  | v2.2.5 | v2.2.3 | v0.50.14 | v8.4.0  | =4.3.7 | 
| 2025-11-05 | v0.54.3  | v2.2.4 | v2.2.2 | v0.50.14 | v8.4.0  | =4.3.7 | 
| 2025-07-09 | v0.54.2  | v2.2.4 | v2.2.2 | v0.50.14 | v8.4.0  | =4.3.7 | 
| 2025-06-10 | v0.54.1  | v2.2.4 | v2.2.2 | v0.50.11 | v8.4.0  | =4.3.7 | 
| 2025-01-08 | v0.54.0  | v2.2.1 | v2.2.0 | v0.50.11 | v8.4.0  | =4.3.7 |
| 2025-07-08 | v0.53.4  | v2.1.4 | v2.1.5 | v0.50.14 | v8.4.0  | =4.3.3 | 
| 2025-06-10 | v0.53.3  | v2.1.4 | v2.1.5 | v0.50.9  | v8.4.0  | =4.3.3 | 
| 2024-12-10 | v0.53.2  | v2.1.4 | v2.1.5 | v0.50.9  | v8.4.0  | =4.3.3 | 
| 2024-12-10 | v0.53.1  | v2.1.4 | v2.1.5 | v0.50.9  | v8.4.0  | =4.3.3 | 
| 2024-08-21 | v0.53.0  | v2.1.2 | v2.1.3 | v0.50.9  | v8.4.0  | =4.3.3 | 
| 2024-07-17 | v0.52.0  | v2.1.0 | v2.1.0 | v0.50.7  | v8.3.2  | =4.3.3 | 
| 2024-04-22 | v0.51.0  | v2.0.0 | v2.0.0 | v0.50.6  | v8.0.0  | =4.2.6 | 
| 2023-11-23 | v0.50.0  | v1.5.0 | v1.5.0 | v0.50.1  | v8.0.0  | =4.2.2 | 
| 2024-08-21 | v0.46.0  | v1.5.4 | v1.5.7 | v0.47.8  | v7.3.0  | =4.2.2 | 
| 2023-11-15 | v0.45.0  | v1.5.0 | v1.5.0 | v0.47.5  | v7.3.0  | =4.2.2 | 
| 2023-11-06 | v0.44.0  | v1.5.0 | v1.5.0 | v0.47.5  | v7.3.0  | =4.2.2 | 
| 2023-10-10 | v0.43.0  | v1.4.1 | v1.4.1 | v0.47.5  | v7.3.0  | =4.1.2 | 
| 2023-09-21 | v0.42.0  | v1.4.0 | v1.4.0 | v0.47.5  | v7.3.0  | =4.1.2 | 
| 2023-07-28 | v0.41.0  | v1.3.0 | v1.3.0 | v0.47.4  | v7.2.0  | =2.3.0 |  
| 2023-06-09 | v0.40.2  | v1.2.4 | v1.2.6 | v0.47.3  | v7.0.1  | =2.3.0 |  
| 2023-06-06 | v0.40.1  | v1.2.4 | v1.2.6 | v0.47.2  | v7.0.1  | =2.3.0 |  
| 2023-05-25 | v0.40.0  | v1.2.3 | v1.2.4 | v0.47.2  | v7.0.1  | =2.3.0 |  
| 2025-06-10 | v0.34.2  | v1.5.7 | v1.5.9 | v0.45.16 | v4.4.2  | =4.2.2 |  
| 2025-01-08 | v0.34.1  | v1.5.7 | v1.5.9 | v0.45.16 | v4.4.2  | =4.2.2 |  
| 2024-12-18 | v0.34.0  | v1.5.6 | v1.5.9 | v0.45.16 | v4.4.2  | =4.2.2 |  

## Checking dependencies

To check the version of `wasmvm` used in **wasmd**,
checkout a requested _**tag**_ in [wasmd] repository and run:

```shell
cat go.mod | grep -E '^\s+github.com/CosmWasm/wasmvm'
```

To check the version of `cosmos-sdk` used in **wasmd**,
checkout a requested _**tag**_ in [wasmd] repository and run:

```shell
cat go.mod | grep -E '^\s+github.com/cosmos/cosmos-sdk'
```

To check the version of `ibc-go` used in **wasmd**,
checkout a requested _**tag**_ in [wasmd] repository and run:

```shell
cat go.mod | grep -E '^\s+github.com/cosmos/ibc-go'
```

To check the version of `cosmwasm-std` used in **wasmvm**,
checkout a requested _**tag**_ in [wasmvm] repository and run:

```shell
cat libwasmvm/Cargo.toml | grep cosmwasm-std
```

To check the version of `cosmwasm-vm` used in **wasmvm**,
checkout a requested _**tag**_ in [wasmvm] repository and run:

```shell
cat libwasmvm/Cargo.toml | grep cosmwasm-vm
```

Check the version of `wasmer` used in **cosmwasm-vm**,
checkout a requested _**tag**_ in [cosmwasm] repository and run:

```shell
cat packages/vm/Cargo.toml | grep -E '^wasmer ='
```

[wasmd]: https://github.com/CosmWasm/wasmd
[wasmvm]: https://github.com/CosmWasm/wasmvm
[cosmwasm]: https://github.com/CosmWasm/cosmwasm
[cosmwasm-std]: https://github.com/CosmWasm/cosmwasm/tree/main/packages/std
[Cosmos SDK]: https://github.com/cosmos/cosmos-sdk
[IBC]: https://github.com/cosmos/ibc-go
[wasmer]: https://crates.io/crates/wasmer
