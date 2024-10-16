import CloseIcon from '@mui/icons-material/Close'

import DeleteSvg from '@assets/icons/delete.svg?react'
import EditSvg from '@assets/icons/edit.svg?react'
import PlusSvg from '@assets/icons/plus.svg?react'

import { IconSvg } from '../SvgIcon'

const icon = {
	plus: <IconSvg component={PlusSvg} fontSize="small" />,
	edit: <IconSvg component={EditSvg} fontSize="small" />,
	delete: <IconSvg component={DeleteSvg} fontSize="small" />,
	close: <CloseIcon fontSize="small" />
}

export type IconNameProps = 'plus' | 'edit' | 'delete' | 'close'

interface Props {
	name: IconNameProps
}

export function Icon({ name }: Props) {
	return icon[name]
}
