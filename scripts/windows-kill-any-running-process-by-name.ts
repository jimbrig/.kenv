// Name: Kill
// Description: Immediately terminates a Windows process using `taskkill /F /im <name.exe>`
// Keyword: kill
// Pass:

import '@johnlindquist/kit'
import { Choice } from '@johnlindquist/kit'

const cache = await db({ recents: ["node.exe"] as string[] })

const exe = arg.pass ?? await arg('Type the name of a .exe to kill', cache.recents.map(x => {
  if (x === 'node.exe') {
    return {
      name: x,
      description: "CAUTION: This will stop all Kit Scripts (including this one, so there won't be an output)",
      value: x
    } as Choice
  }

  return x
}))

cache.recents = Array.from(new Set(cache.recents).add(exe))
cache.write().then()

try {
  const res = await exec(`taskkill /F /im "${exe}"`)
  await div(res.stdout + res.stderr)
} catch (err) {
  if (err.exitCode === 128) {
    await div('No process was active.')
  }
  console.error(err);
  exit()
}