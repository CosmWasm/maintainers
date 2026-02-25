# Components

## Dependencies

### `cosmwasm` repository

The following diagram depicts the dependencies between CosmWasm components maintained
in the [cosmwasm](https://github.com/CosmWasm/cosmwasm) repository. 

```mermaid
---
config:
  theme: 'forest'
---

graph BT
    A("`**cosmwasm-core**
        3.0.4`")
 
    B("`**cosmwasm-std**
        3.0.4`")
 
    C("`**cosmwasm-crypto**
        3.0.4`")
        
    D("`**cosmwasm-vm**
        3.0.4`")
        
    E("`**cosmwasm-vm-derive**
        3.0.4`")
        
    F("`**cosmwasm-derive**
        3.0.4`")    
        
    G("`**cosmwasm-schema**
        3.0.4`")

    H("`**cosmwasm-schema-derive**
        3.0.4`")
        
    I("`**cosmwasm-check**
        3.0.4`")
        
    J("`**cw-schema**
        3.0.4`")

    K("`**cw-schema-derive**
        3.0.4`")
        
    A --> B
    A --> C
    A --> D
    C --> B
    C --> D
    B --> D
    E --> D
    F --> B
    H --> G
    B --> I
    D --> I
    G --> B
    J --> B
    J --> G
    K --> J
```
