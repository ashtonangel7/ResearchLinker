interface IExtractor<TOutput> {
	Extract(): Promise<TOutput>
}

export = IExtractor;