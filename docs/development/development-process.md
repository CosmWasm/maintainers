---
sidebar_position: 1
---

# Development process

## New features

aaa

```mermaid
gitGraph TB:
       commit id:"M1"
       commit id:"M2"
       branch feature-1
       commit id:"A1"
       commit id:"A2"
       checkout main
       merge feature-1
       commit id:"M3"
       commit id:"M4"
       branch feature-2
       commit id:"B1"
       commit id:"B2"
       commit id:"B3"
       checkout main
       merge feature-2
       commit id:"M5"
```

## Releases

bbb

```mermaid
---
config:
  gitGraph:
    parallelCommits: true
---
gitGraph TB:
       commit id:"M1"
       commit id:"M2"
       branch release/v1.0.x
       commit id:"A1" tag:"v1.0.0"
       commit id:"A2" tag:"v1.0.1"
       checkout main
       commit id:"M3"
       commit id:"M4"
       branch release/v1.1.x
       commit id:"B1" tag:"v1.1.0"
       commit id:"B2" tag:"v1.1.1"
       commit id:"B3" tag:"v1.1.2"
       commit id:"B4" tag:"v1.1.3"
       checkout release/v1.0.x
       commit id:"A3" tag:"v1.0.2"
       commit id:"A4" tag:"v1.0.3"
       checkout main
       commit id:"M5"
       commit id:"M6"
       checkout release/v1.0.x
       commit id:"A5" tag:"v1.0.4"
       checkout main
       branch release/v2.0.x
       commit id:"C1" tag:"v2.0.0"
       commit id:"C2" tag:"v2.0.1"
       commit id:"C3" tag:"v2.0.2"
       commit id:"C4" tag:"v2.0.3"
       checkout main
       commit id:"M7"
       commit id:"M8"
```

## Bug fixes

ccc

```mermaid
---
config:
  gitGraph:
    parallelCommits: true
---
gitGraph TB:
       commit id:"M1"
       commit id:"M2"
       branch release/v1.0.x
       commit id:"R1" tag:"v1.0.0"
       branch develop/v1.0.1
       checkout develop/v1.0.1
       commit id:"D1"
       branch fix-1
       commit id:"F1"
       commit id:"F2"
       checkout develop/v1.0.1
       merge fix-1
       commit id:"D2"
       checkout develop/v1.0.1
       branch fix-2
       commit id:"G1"
       commit id:"G2"
       commit id:"G3"
       checkout develop/v1.0.1
       merge fix-2
       commit id:"D3"
       checkout release/v1.0.x
       merge develop/v1.0.1
       commit id:"R2" tag:"v1.0.1"
       checkout main
       commit id:"M3"
       commit id:"M4"
       commit id:"M5"
       commit id:"M6"
       commit id:"M7"
       commit id:"M8"
```

### Example

```shell
git checkout release/v2.2.x
```

```shell
git checkout -b develop/v2.2.6
```

> magg develop

```shell
git checkout -b fix-1
```

- Implement **fix-1**
- Merge PR with **fix-1** to `develop/v2.2.6`

```shell
git checkout develop/v2.2.6
```

```shell
git checkout -b fix-2
```

- Implement **fix-2**
- Merge PR with **fix-2** to `develop/v2.2.6`

```shell
git checkout develop/v2.2.6
```

```shell
git checkout -b fix-3
```

- Implement **fix-3**
- Merge PR with **fix-3** to `develop/v2.2.6`

```shell
git checkout develop/v2.2.6
```

> magg publish

- Merge `develop/v2.2.6` to `release/v2.2.x`

```shell
git tag -s v2.2.6 -m "Published version v2.2.6"
```
