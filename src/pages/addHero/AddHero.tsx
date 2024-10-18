import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import { useSWRConfig } from 'swr'
import * as yup from 'yup'

import { Box, Button, Container, Grid2 as Grid, Stack } from '@mui/material'

import { HeaderPage } from '@components/HeaderPage'

import Background from '@assets/bckground-gibi.png'

import { InputFile } from '~/components/Inputs/InputFile'
import { InputText } from '~/components/Inputs/InputText'
import { useFetcherHero } from '~/hooks/hero/useFetcherHero'
import { addHero } from '~/services/hero/add-hero'
import { editHero } from '~/services/hero/update-hero'

import { addHeroValidation } from './validation'

type FormHero = yup.InferType<typeof addHeroValidation>

export const AddHero = () => {
	const navigate = useNavigate()
	const { state } = useLocation()
	const { mutate } = useFetcherHero()
	const { mutate: mutateGlobal } = useSWRConfig()

	const methods = useForm<FormHero>({
		resolver: yupResolver(addHeroValidation),
		defaultValues: {
			name: state?.hero.name ?? '',
			description: state?.hero.description ?? '',
			image: state?.hero.image ?? undefined
		}
	})

	const onSubmit: SubmitHandler<FormHero> = async (data: FormHero) => {
		if (state?.hero) {
			try {
				await editHero({ id: state?.hero.id ?? '', data })
				mutateGlobal(`/heroes/${state?.hero.id}`, () => editHero({ id: state?.hero.id ?? '', data }))
				mutate()
			} catch (err) {
				toast.error('Erro ao editar herói')
			} finally {
				navigate(-1)
			}
		} else {
			try {
				await addHero(data)
				mutate()
			} catch (err) {
				toast.error('Erro ao adicionar herói')
				return
			} finally {
				navigate(-1)
			}
		}
	}

	return (
		<Box sx={{ width: '100%', height: '100%', minHeight: 'calc(100vh - 144px)' }}>
			<HeaderPage title={state?.hero ? 'Editar' : 'Cadastrar'} background={Background} />

			<Container maxWidth="sm">
				<FormProvider {...methods}>
					<Grid container spacing={2} maxWidth={'md'}>
						<Grid size={12}>
							<InputText label="Nome do Herói" name="name" />
						</Grid>
						<Grid size={12}>
							<InputText label="Descrição" name="description" />
						</Grid>
						<Grid size={12}>
							<InputFile defaultValue={state?.hero.image ?? ''} onChange={(file) => methods.setValue('image', file)} />
						</Grid>

						<Grid size={12} mt={2}>
							<Stack direction="row" justifyContent="space-between" spacing={2}>
								<Button
									type="button"
									variant="outlined"
									color="error"
									sx={{ background: 'transparent', width: '100%' }}
									onClick={() => navigate(-1)}
								>
									Cancelar
								</Button>
								<Button
									type="submit"
									variant="contained"
									sx={{ width: '100%' }}
									onClick={methods.handleSubmit(onSubmit)}
								>
									{state?.hero ? 'Editar' : 'Cadastrar'}
								</Button>
							</Stack>
						</Grid>
					</Grid>
				</FormProvider>
			</Container>
		</Box>
	)
}
