interface IReader<TRead> {
	Read(): Promise<TRead>;
}

export = IReader;