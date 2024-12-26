import { atom, useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { Slider } from '@/components/slider'

import { AppProvider } from './provider'

const baseAtom = atomWithStorage('hue', 222)
const hueAtom = atom(
  get => get(baseAtom),
  (_, set, newHue: number) => {
    set(baseAtom, newHue)
    document.documentElement.style.setProperty('--hue', newHue.toString())
  },
)

export function App() {
  const [hue, setHue] = useAtom(hueAtom)

  return (
    <AppProvider>
      <div className="flex min-h-svh flex-col items-center justify-center gap-6">
        <h1 className="font-dm text-xl font-semibold">
          <span className="text-secondary">HSL</span>
          {' '}
          is All You Need
        </h1>
        <div className="flex items-center gap-5">
          <div className="text-sm font-medium">Hue</div>
          <Slider
            className="w-64 sm:w-72"
            value={[hue]}
            onValueChange={value => setHue(value[0])}
            min={0}
            max={360}
            step={1}
          />
          <input
            className="w-14 rounded bg-primary py-1.5 text-center text-sm text-background focus:outline-none"
            value={hue}
            onChange={e => setHue(Number(e.target.value))}
          />
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/mancuoj-collective/react-tmpl-themes" className="i-carbon-logo-github" />
          <DarkModeToggle />
        </div>
      </div>
    </AppProvider>
  )
}
