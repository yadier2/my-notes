import { useRoutes } from 'react-router-dom'

// project imports
import PublicRoutes from './PublicRoutes'

// ===========================|| ROUTING RENDER ||=========================== //

export default function ThemeRoutes() {
	return useRoutes([PublicRoutes ])
}
