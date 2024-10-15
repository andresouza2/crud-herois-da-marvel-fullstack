import { Controller, useFormContext } from 'react-hook-form'

import { TextField, TextFieldProps } from '@mui/material'

interface InputProps {
	name: string
	strengthIndicator?: boolean
	defaultValue?: string | number | readonly string[]
	readOnly?: boolean
	required?: boolean
}

export const InputText = ({ name, ...rest }: InputProps & TextFieldProps) => {
	const { control } = useFormContext()
	return (
		<Controller
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					label="Nome do Herói"
					value={value ?? ''}
					onChange={onChange}
					error={!!error}
					helperText={error?.message}
					required
					fullWidth
					sx={{
						my: 2,
						'&:disabled': {
							borderColor: '#919EAB52'
						},
						'& .MuiInputBase-root': {
							fontWeight: 400,
							fontSize: 15,
							borderRadius: 1,
							borderColor: 'primary.main',
							color: 'primary.main'
						},
						'& label': {
							color: 'primary.main',
							fontWeight: 400,
							fontSize: 15
						},
						'& label.Mui-focused': {
							color: 'primary.main'
						},
						'& .MuiOutlinedInput-root': {
							'& fieldset': {
								borderColor: 'primary.main'
							},
							'&.Mui-focused fieldset': {
								borderColor: 'primary.main'
							},
							'&:hover fieldset': {
								borderColor: 'primary.main'
							}
						}
					}}
					{...rest}
				/>
			)}
			name={name}
			rules={{ required: Boolean(rest['required']) }}
			control={control}
		/>
	)
}
