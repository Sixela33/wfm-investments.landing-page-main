function onceMounted(callback) {
	// is trash i know
	setTimeout(() => {
		callback();
	}, 50);
}

export default onceMounted;