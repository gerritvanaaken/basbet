export interface Song {
	country: string;
	countryCode: string;
	order: number;
	points: number;
	title: string;
	artist: string;
}

export interface MetaData {
	formatversion: string;
	day: string;
	showtype: 'Grand Final' | 'Semi-Final 1' | 'Semi-Final 2';
	bettingLocked: boolean;
	finished: boolean;
}

export interface SongData {
	meta: MetaData;
	songs: Song[];
}

export interface Player {
	name: string,
	ranking: Song[]
}
