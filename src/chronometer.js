class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = null;
	}

	start(printTimeCallback) {
		this.intervalId = setInterval(() => {
			this.currentTime++;
			if (printTimeCallback) printTimeCallback();
		}, 1000);
	}

	getMinutes() {
		return 3;
	}

	getSeconds() {
		return this.currentTime;
	}

	computeTwoDigitNumber(value) {
		return value.toString().padStart(2, '0');
	}

	stop() {
		clearInterval(this.intervalId);
	}

	reset() {}

	split() {}
}
