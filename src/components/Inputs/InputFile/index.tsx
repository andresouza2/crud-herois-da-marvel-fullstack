import { useState } from 'react'
import { toast } from 'react-toastify'

import { filesize } from 'filesize'

import HelpIcon from '@mui/icons-material/Help'
import { Box, LinearProgress, Stack, Tooltip, Typography } from '@mui/material'

import { IconButton } from '@components/IconButton'

import MAX_SIZE from '~/config/maxFileUploadSize'
import { uuid } from '~/helpers/uuid'

interface Props {
	defaultValue?: string
	error?: boolean
	errorValidation?: string
	isUploading?: boolean
	progress?: number
	onCancel?: () => void
	onChange?: (file: File) => void
	onDelete?: () => void
	help?: boolean
}

export function InputFile({
	defaultValue,
	error,
	errorValidation,
	isUploading,
	progress,
	onCancel,
	onChange,
	onDelete,
	help
}: Readonly<Props>) {
	const [file, setFile] = useState<File | undefined>({} as File)
	const [fileName, setFileName] = useState(() => {
		if (defaultValue?.includes('/')) return defaultValue?.split('/')?.pop()
		return defaultValue
	})

	const handleChange = (value?: File) => {
		if (value) {
			if (value.size > MAX_SIZE) {
				toast.warn('Arquivo muito grande')
				return
			}

			const file = value
			const fileExtension = file?.type?.replace('image/', '') ?? file?.name?.match(/\.([^.]+)$/)?.[1]
			const newName = `${uuid()}.${fileExtension}` // Gerar um novo nome usando UUID

			// Adicione o novo nome ao objeto File
			const renamedFile = new File([file], newName, { type: file?.type })

			setFile(renamedFile)
			onChange?.(renamedFile)
		}
	}
	const handleCancel = () => {
		onCancel?.()
		setFile(undefined)
		setFileName(undefined)
		onDelete?.()
	}

	const size = filesize(file?.size ?? 0, { round: 2, standard: 'jedec' })

	return (
		<Stack>
			{!isUploading && !file?.name && !fileName && (
				<Box
					width="100%"
					sx={{
						display: 'grid',
						gap: 2,
						gridTemplateAreas: help
							? ['"input input  info" "text text text"', '"input text info" "input text info2"']
							: ['"input input  input" "text text text"', '"input text text" "input text text"']
					}}
				>
					<Box
						component="label"
						htmlFor="upload"
						sx={{
							gridArea: 'input'
						}}
					>
						<input
							id="upload"
							accept="image/*"
							type="file"
							hidden
							style={{ display: 'none' }}
							onChange={(event) => handleChange(event?.target?.files?.[0])}
						/>
						<Box
							sx={{
								cursor: 'pointer',
								borderRadius: '6px',
								padding: 1,
								border: (theme) => `2px solid ${theme.palette.primary.main}`,
								minWidth: 120,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								'&:hover': {
									background: (theme) => theme.palette.secondary.main
								}
							}}
						>
							Adicionar imagem
						</Box>
					</Box>

					<Stack
						alignItems="flex-start"
						justifyContent="center"
						width="100%"
						sx={{
							gridArea: 'text'
						}}
					>
						<Typography variant="body1" color={error ? 'error' : 'primary'} fontWeight="bold">
							{error ? 'Erro ao carregar o arquivo' : 'Selecione o arquivo'}
						</Typography>
						<Typography variant="body2" color="unset">
							imagem JPG ou PNG
						</Typography>
					</Stack>

					{help && (
						<Stack alignItems={'flex-end'}>
							<Tooltip
								title="Ajuda"
								arrow
								placement="bottom"
								sx={{
									gridArea: 'info'
								}}
							>
								<HelpIcon />
							</Tooltip>
						</Stack>
					)}
				</Box>
			)}

			{isUploading && !error && (
				<Stack width="100%" spacing={1}>
					<Stack direction="row" spacing={2} width="100%" alignItems="center">
						<Typography variant="body1" color="primary" fontWeight="bold">
							Enviar
						</Typography>

						<Box width="100%">
							<LinearProgress variant="determinate" value={progress} />
						</Box>
					</Stack>

					<Stack direction="row" spacing={2} justifyContent="space-between">
						<Typography variant="body2" color="unset">
							filename.png
						</Typography>

						<Stack spacing={2} direction="row" alignItems="center">
							<Typography variant="body2" color="unset">
								25 MB
							</Typography>

							{onCancel && <IconButton size="small" color="inherit" iconName="close" onClick={handleCancel} />}
						</Stack>
					</Stack>
				</Stack>
			)}

			{!isUploading && !error && (file?.name || fileName) && (
				<Stack width="100%" spacing={1}>
					<Stack direction="row" spacing={2} justifyContent="space-between">
						<Typography variant="body2" color="unset">
							{file?.name || fileName}
						</Typography>

						<Stack spacing={2} direction="row" alignItems="center">
							{file?.name && (
								<Typography variant="body2" color="unset" noWrap>
									{size?.toString()}
								</Typography>
							)}

							<IconButton
								size="small"
								color="primary"
								title={onDelete ? 'deletar' : ''}
								iconName={onDelete ? 'delete' : 'close'}
								onClick={handleCancel}
							/>
						</Stack>
					</Stack>
				</Stack>
			)}

			{errorValidation && (
				<Typography color="error" variant="body2">
					{errorValidation}
				</Typography>
			)}
		</Stack>
	)
}
