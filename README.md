# 邮箱自动发送

Standard **MCP + Skill** for any Agent Host (Cursor / Claude Code / Codex / Zhencheng).

生成邮箱投递草稿；发送须确认。

> One capability = one GitHub project. This folder is the sellable unit.

## Quick start

```bash
cd zc-skill-apply-email
npm i
node stdio_mcp_server.mjs
```

## Cursor (`~/.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "zc-skill-apply-email": {
      "command": "node",
      "args": ["/ABS/PATH/zc-skill-apply-email/stdio_mcp_server.mjs"]
    }
  }
}
```

Optional (use Zhencheng live tools):

```json
"env": {
  "ZC_AGENT_API_URL": "https://your-zhencheng-host",
  "ZC_MCP_TOKEN": "your-token"
}
```

## Tools

| Tool | Args |
|------|------|
| `draft_apply_email` | `query?` `jdText?` `profileText?` `location?` `notes?` `limit?` (number) |

## Skill

See `skills/zc-skill-apply-email/SKILL.md`.

## License

MIT — see `LICENSE`.
