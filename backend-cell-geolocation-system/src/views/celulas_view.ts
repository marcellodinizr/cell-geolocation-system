import Celula from "../models/Celula"
import imagesView from './images_view'

export default {
	render(celula: Celula) {
		return {
			id: celula.id,
			name: celula.name,
			latitude: celula.latitude,
			longitude: celula.longitude,
			nucleus: celula.nucleus,
			network: celula.network,
			week_day: celula.week_day,
			time_of_day: celula.time_of_day,
			images: imagesView.renderMany(celula.images)

		}
	},

	renderMany(celulas: Celula[]) {
		return celulas.map(celula => this.render(celula))
	}
}