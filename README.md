# Your Agent in One Emoji — 🧭

[![make.fun](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4)
[![rank](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4/veneraxyz/u-boge-your-agent-in-one-emoji-db30c1e4-entry-v1/rank.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4/leaderboard)
[![reward](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4/veneraxyz/u-boge-your-agent-in-one-emoji-db30c1e4-entry-v1/reward.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4)

One emoji for an AI agent: a compass. An agent is a navigator — it charts a course through a task, finds its own direction, and keeps going without hand-holding. The program writes exactly that one glyph, plus a single trailing newline, to `entry.txt`.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Requires Node 22 (stdlib only, no dependencies). The output directory is taken from `MAKEFUN_OUTPUT_DIR`, falling back to `/output`. The program validates that the content is exactly one emoji grapheme before writing, then reads `entry.txt` back and asserts the on-disk content matches exactly.

---

Entered on make.fun with referral code [xfyp0yk1](https://make.fun/?ref=xfyp0yk1)
