---
sidebar_position: 3
---

# Rust nightly

CosmWasm libraries are tested using several test smart contracts.
Some of them must be compiled using the Rust nightly channel.
If a smart contract needs to be compiled to WebAssembly using a specific Rust version,
for example 1.81.0, you will usually also need a corresponding nightly version.
Below are the nightly versions listed for each stable Rust version.

## 1.81.0

|         1.81.0         |  Release date  |    Rust version    |
|:----------------------:|:--------------:|:------------------:|
|   nightly-2024-06-09   |   2024-06-08   |   1.81.0-nightly   |
|           ⋮            |       ⋮        |         ⋮          |
| **nightly-2024-07-21** | **2024-07-20** | **1.81.0-nightly** |

## 1.82.0

|         1.82.0         |  Release date  |    Rust version    |
|:----------------------:|:--------------:|:------------------:|
|   nightly-2024-07-22   |   2024-07-21   |   1.82.0-nightly   |
|           ⋮            |       ⋮        |         ⋮          |
| **nightly-2024-09-01** | **2024-08-31** | **1.82.0-nightly** |

## 1.83.0

|         1.83.0         |  Release date  |    Rust version    |
|:----------------------:|:--------------:|:------------------:|
|   nightly-2024-09-02   |   2024-09-01   |   1.83.0-nightly   |
|           ⋮            |       ⋮        |         ⋮          |
| **nightly-2024-10-13** | **2024-10-12** | **1.83.0-nightly** |

## 1.84.0

|         1.84.0         |  Release date  |    Rust version    |
|:----------------------:|:--------------:|:------------------:|
|   nightly-2024-10-14   |   2024-10-13   |   1.84.0-nightly   |
|           ⋮            |       ⋮        |         ⋮          |
| **nightly-2024-11-22** | **2024-11-21** | **1.84.0-nightly** |

## 1.85.0

:::info
- [**Edition 2024**](https://blog.rust-lang.org/2025/02/20/Rust-1.85.0/)
:::

|         1.85.0         |  Release date  |    Rust version    |
|:----------------------:|:--------------:|:------------------:|
|   nightly-2024-11-23   |   2024-11-22   |   1.85.0-nightly   |
|           ⋮            |       ⋮        |         ⋮          |
| **nightly-2025-01-03** | **2025-01-02** | **1.85.0-nightly** |

## 1.86.0

|         1.86.0         |  Release date  |    Rust version    |
|:----------------------:|:--------------:|:------------------:|
|   nightly-2025-01-04   |   2025-01-03   |   1.86.0-nightly   |
|           ⋮            |       ⋮        |         ⋮          |
| **nightly-2025-02-16** | **2025-02-15** | **1.86.0-nightly** |

## 1.87.0

:::warning
- [`bulk-memory` (Rust 1.87.0+, LLVM 20+)](https://doc.rust-lang.org/stable/rustc/platform-support/wasm32-unknown-unknown.html?highlight=bulk-memory#enabled-webassembly-features)
:::

:::danger
Gas usage for argon2 is reduced drastically because of optimizations in this Rust version.
:::

|         1.87.0         |  Release date  |    Rust version    |
|:----------------------:|:--------------:|:------------------:|
|   nightly-2025-02-17   |   2025-02-16   |   1.87.0-nightly   |
|           ⋮            |       ⋮        |         ⋮          |
| **nightly-2025-03-29** | **2025-03-29** | **1.87.0-nightly** |

## 1.88.0

|         1.88.0         |  Release date  |    Rust version    |
|:----------------------:|:--------------:|:------------------:|
|   nightly-2025-03-30   |   2025-03-29   |   1.88.0-nightly   |
|           ⋮            |       ⋮        |         ⋮          |
| **nightly-2025-05-09** | **2025-05-08** | **1.88.0-nightly** |

## 1.89.0

:::danger
- `__rust_probestack` is not issued any more.
:::

|         1.89.0         |  Release date  |    Rust version    |
|:----------------------:|:--------------:|:------------------:|
|   nightly-2025-05-10   |   2025-05-09   |   1.89.0-nightly   |
|           ⋮            |       ⋮        |         ⋮          |
| **nightly-2025-06-23** | **2025-06-22** | **1.89.0-nightly** |

## 1.90.0

|         1.90.0         |  Release date  |    Rust version    |
|:----------------------:|:--------------:|:------------------:|
|   nightly-2025-06-24   |   2025-06-23   |   1.90.0-nightly   |
|           ⋮            |       ⋮        |         ⋮          |
| **nightly-2025-08-02** | **2025-08-01** | **1.90.0-nightly** |

## 1.91.0

|         1.91.0         |  Release date  |    Rust version    |
|:----------------------:|:--------------:|:------------------:|
|   nightly-2025-08-03   |   2025-08-02   |   1.91.0-nightly   |
|           ⋮            |       ⋮        |         ⋮          |
| **nightly-2025-09-14** | **2025-09-13** | **1.91.0-nightly** |

## 1.92.0

|         1.92.0         |  Release date  |    Rust version    |
|:----------------------:|:--------------:|:------------------:|
|   nightly-2025-09-15   |   2025-09-14   |   1.92.0-nightly   |
|           ⋮            |       ⋮        |         ⋮          |
| **nightly-2025-10-25** | **2025-10-24** | **1.92.0-nightly** |

## 1.93.0

|         1.93.0         |  Release date  |    Rust version    |
|:----------------------:|:--------------:|:------------------:|
|   nightly-2025-10-26   |   2025-10-25   |   1.93.0-nightly   |
|           ⋮            |       ⋮        |         ⋮          |
| **nightly-2025-12-05** | **2025-12-04** | **1.93.0-nightly** |

## 1.94.0

|         1.94.0         |  Release date  |    Rust version    |
|:----------------------:|:--------------:|:------------------:|
|   nightly-2025-12-06   |   2025-12-05   |   1.94.0-nightly   |
|           ⋮            |       ⋮        |         ⋮          |
| **nightly-2026-01-18** | **2026-01-17** | **1.94.0-nightly** |

## 1.95.0

|         1.95.0         |  Release date  |    Rust version    |
|:----------------------:|:--------------:|:------------------:|
|   nightly-2026-01-19   |   2026-01-18   |   1.95.0-nightly   |
|           ⋮            |       ⋮        |         ⋮          |
| **nightly-2026-02-28** | **2026-02-27** | **1.95.0-nightly** |

## 1.96.0

|         1.96.0         |  Release date  |    Rust version    |
|:----------------------:|:--------------:|:------------------:|
|   nightly-2026-03-01   |   2026-02-28   |   1.96.0-nightly   |
|           ⋮            |       ⋮        |         ⋮          |
| **nightly-2026-04-11** | **2026-04-10** | **1.96.0-nightly** |

## 1.97.0

|       1.97.0       | Release date |    Rust version    |
|:------------------:|:------------:|:------------------:|
| nightly-2026-04-12 |  2026-04-11  |   1.97.0-nightly   |
|         ⋮          |      ⋮       |         ⋮          |
|  **nightly-???**   |   **???**    | **1.97.0-nightly** |
