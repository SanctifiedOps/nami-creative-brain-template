# Credits + attribution

The `nami-creative-brain` template bundles a curated library of Claude skills in `.claude/skills/`, drawn from the open-source community. They are included in good faith to power a high-craft build workflow. This file credits the authors we can identify and records how licensing works inside this repo.

## What's NAMI Creative's own work

- The Next.js engine, design system (`app/globals.css` `@theme`, `lib/brand.ts`), bespoke motion language, and component library, extracted from [namicreative.co.uk](https://namicreative.co.uk).
- The build IP in `CLAUDE.md` and `CONTEXT/` (discovery flow, build spec, brand-brief template).
- The demo content (NAMI's services, work, voice) as the worked example.

## Third-party skills

Each skill in `.claude/skills/` belongs to its respective author. Where an author shipped a `LICENSE` file inside their skill directory, that licence governs that skill and is preserved unchanged. Skills are grouped and credited below to the sources we can attribute.

| Skill(s) | Author / source | Licence |
|----------|-----------------|---------|
| `stop-slop` | Hardik Pandya — [github.com/hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop) | MIT (in-dir) |
| `ui-styling` | see in-dir `LICENSE.txt` | Apache 2.0 (in-dir) |
| `ui-ux-pro-max` | nextlevelbuilder — [github.com/nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | per author |
| `brainstorming`, `dispatching-parallel-agents`, `executing-plans`, `finishing-a-development-branch`, `receiving-code-review`, `requesting-code-review`, `subagent-driven-development`, `systematic-debugging`, `test-driven-development`, `using-git-worktrees`, `using-superpowers`, `verification-before-completion`, `writing-plans`, `writing-skills` | obra — [github.com/obra/superpowers](https://github.com/obra/superpowers) | per author |

The remaining skills were assembled from various open-source collections. Their authors retain all rights. We have not relicensed any of them; the NAMI licence terms apply only to NAMI's own work listed above.

## Corrections

If you authored a skill bundled here and want different attribution, a licence note added, or the skill removed, open an issue on the repo or email hello@namicreative.co.uk and it will be actioned promptly.
