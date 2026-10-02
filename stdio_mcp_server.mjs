#!/usr/bin/env node
import { createFirstpartyMcp } from '../_shared/create-firstparty-mcp.mjs';

const mcp = createFirstpartyMcp({
  "id": "apply-email",
  "titleZh": "邮箱自动发送",
  "summary": "生成邮箱投递草稿；发送须确认。",
  "tools": [
    "draft_apply_email"
  ],
  "proxyTools": {
    "draft_apply_email": "zc_apply_prepare"
  },
  "localKind": "draft"
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
