---
sidebar_position: 4
---

# Groups of issues

List of label names for maintenance task groups:

|    Label    | Description                              |
|:-----------:|------------------------------------------|
| **`g:rel`** | Group: Releases                          |
| **`g:fea`** | Group: New features                      |
| **`g:imp`** | Group: Improvements and refactoring      |
| **`g:fix`** | Group: Bug fixes                         |
| **`g:dep`** | Group: Dependency upgrades               |
| **`g:doc`** | Group: Documentation and website updates |
| **`g:res`** | Group: Research                          |
| **`g:sec`** | Group: Security                          |


Script for creating groups in specified repository:

```shell
#!/usr/bin/env zsh

REPO=CosmWasm/cosmwasm

gh label create g:rel --color C2E0C6 --description "Group: Releases" --force --repo "$REPO"                          
gh label create g:fea --color C2E0C6 --description "Group: New features" --force --repo "$REPO"                      
gh label create g:imp --color C2E0C6 --description "Group: Improvements and refactoring" --force --repo "$REPO"      
gh label create g:fix --color C2E0C6 --description "Group: Bug fixes" --force --repo "$REPO"                         
gh label create g:dep --color C2E0C6 --description "Group: Dependency upgrades" --force --repo "$REPO"               
gh label create g:doc --color C2E0C6 --description "Group: Documentation and website updates" --force --repo "$REPO" 
gh label create g:res --color C2E0C6 --description "Group: Research" --force --repo "$REPO"                          
gh label create g:sec --color C2E0C6 --description "Group: Security" --force --repo "$REPO"
```
