---
name: zc-skill-apply-email
description: >-
  生成邮箱投递草稿；发送须确认。
  Use in any Agent Host that can mount stdio MCP. Pair with zc-skill-apply-email.
---

# 邮箱自动发送 · Skill

## When to use

- User asks for: 邮箱自动发送
- 生成邮箱投递草稿；发送须确认。

## Tools (`zc-skill-apply-email`)

| Tool | Args |
|------|------|
| `draft_apply_email` | query, jdText, profileText, location, notes, limit |

## Example

```json
{
  "query": "Frontend Engineer",
  "location": "remote",
  "jdText": "<paste JD>",
  "profileText": "<paste profile>"
}
```

## Limits

- Do not invent employers, dates, or numbers
- Do not apply or send email unless the user confirms
- Unknown facts must be marked unknown

## Host install

Mount this repo as stdio MCP (see README). Not Zhencheng-only.
