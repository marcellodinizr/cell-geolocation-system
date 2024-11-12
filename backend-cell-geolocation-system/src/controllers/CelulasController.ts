import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Celula from '../models/Celula';
import celulasView from '../views/celulas_view';

export default {
	async index(request: Request, response: Response) {
		const celulasRepository = getRepository(Celula);

		const celulas = await celulasRepository.find({
			relations: ['images']
		});

		return response.json(celulasView.renderMany(celulas));
	},

	async show(request: Request, response: Response) {
		const { id } = request.params;

		const celulasRepository = getRepository(Celula);

		const celula = await celulasRepository.findOneOrFail(id, {
			relations: ['images']
		});

		return response.json(celulasView.render(celula));
	},

	async create(request: Request, response: Response) {
		const {
			name,
			latitude,
			longitude,
			nucleus,
			network,
			week_day,
			time_of_day,
		} = request.body;

		const celulasRepository = getRepository(Celula);

		const requestImages = request.files as Express.Multer.File[];

		const images = requestImages.map(image => {
			return { path: image.filename }
		})

		const data = {
			name,
			latitude,
			longitude,
			nucleus,
			network,
			week_day,
			time_of_day,
			images,
		};

		const schema = Yup.object().shape({
			name: Yup.string().required(),
			latitude: Yup.number().required(),
			longitude: Yup.number().required(),
			nucleus: Yup.string().required(),
			network: Yup.string().required(),
			week_day: Yup.string().required(),
			time_of_day: Yup.string().required(),
			images: Yup.array(
				Yup.object().shape({
					path: Yup.string().required(),
				})
			)
		});

		await schema.validate(data, {
			abortEarly: false, // abort early and return all errors found during validation errors before validation is complete
		});

		const celula = celulasRepository.create(data);

		await celulasRepository.save(celula);

		return response.status(201).json(celulasView.render(celula))
	}
}