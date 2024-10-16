import * as Yup from 'yup'

export const addHeroValidation = Yup.object().shape({
	name: Yup.string().required('O nome do heroi é obrigatório'),
	description: Yup.string()
		.min(10, 'A descrição do heroi deve ter pelo menos 10 caracteres')
		.max(200, 'A descrição do heroi deve ter no maximo 200 caracteres')
		.required('A descrição do heroi é obrigatória'),
	image: Yup.mixed().nullable().notRequired()
})
