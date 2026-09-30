# Business rules

Pipeline input documents. Read-only for agents.

Put the canonical domain text here (or a slice of it). Structure it by **system**, then rules:

```markdown
## SYS-001 — System name
### BR-001 — Rule title
…
## SYS-002 — Another system
### BR-010 — …
```

Agents:

1. Detect each `SYS-*`
2. Design a test strategy per system (`specs/*.strategy.md`)
3. Plan scenarios from `BR-*` under that system
4. Cite `SYS-*` / `BR-*`; they do not rewrite this file to close coverage

If a document has no `SYS-*` headings, treat the whole file as one inferred system and still produce a strategy.
