import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
const binary = fileURLToPath(new URL('../node_modules/node/bin/node', import.meta.url))
const cli = fileURLToPath(new URL('../node_modules/nuxt/bin/nuxt.mjs', import.meta.url))
const result = spawnSync(binary, [cli, ...process.argv.slice(2)], { stdio: 'inherit', env: { ...process.env, PATH: `${fileURLToPath(new URL('../node_modules/node/bin', import.meta.url))}:${process.env.PATH}` } })
if (result.error) throw result.error
process.exit(result.status ?? 1)
