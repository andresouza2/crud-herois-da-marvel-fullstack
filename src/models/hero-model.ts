export interface IHero {
	id: string
	name: string
	description: string
	image: string
	imageUrl: string
}

export interface IHeroForm {
	name: string
	description: string
	image: FileList | undefined
}
