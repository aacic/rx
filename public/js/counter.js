import { getCompInit } from './rx.js'

class Counter {
	constructor(opts) {
		this.type = 'counter'
		this.dom = {
			holder: opts.holder,
			leftLabel: opts.holder
				.append('span')
				.style('margin-right', '10px')
				.html('Total #clicks: '),
			rightLabel: opts.holder.append('span')
		}
	}

	getState(appState) {
		return appState
	}

	main() {
		this.dom.rightLabel.html(this.state.numClicksSum)
	}
}

export const counterInit = getCompInit(Counter)
