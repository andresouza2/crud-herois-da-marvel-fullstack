import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { Box, Button, Container } from '@mui/material'

import { HeaderPage } from '@components/HeaderPage'

import Background from '@assets/bckground-gibi.png'

import { InputText } from '~/components/Inputs/InputText'
import { IHeroForm } from '~/models/hero-model'

export const AddHero = () => {
	const methods = useForm<IHeroForm>({
		defaultValues: {
			name: '',
			description: '',
			image: undefined
		}
	})

	const onSubmit: SubmitHandler<IHeroForm> = (data: IHeroForm) => {
		console.log(data)
	}

	return (
		<Box sx={{ width: '100%', height: '100%', minHeight: 'calc(100vh - 144px)' }}>
			<HeaderPage title="Cadastrar" background={Background} />

			<Container maxWidth="xl">
				<FormProvider {...methods}>
					<InputText label="Nome do Herói" name="name" />
					<InputText label="Descrição" name="description" />
					<InputText label="Imagem" name="image" />

					<Button
						type="button"
						variant="outlined"
						color="error"
						sx={{ background: 'transparent' }}
						onClick={methods.handleSubmit(onSubmit)}
					>
						Voltar
					</Button>
					<Button type="submit" variant="contained" onClick={methods.handleSubmit(onSubmit)}>
						Salvar
					</Button>
				</FormProvider>
			</Container>
		</Box>
	)
}
