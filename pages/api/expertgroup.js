import axios from "axios";

export default function Expert() {
	return (
		{
			"id": 1,
			"group_name": "Arias Uriburu",
			"username": "ariasuriburu",
			"brief": "Soy Gabriela Arias Uriburu y desde mi historia de vida es que comencé todo un camino de resiliencia y transformación que quiero compartir con vos. Este es un espacio donde te invito a crecer, sorprenderte, resolver, acompañarte y también a reírnos, disfrutar y compartir nuestro día a día. \n\n Te invito a lo que será un viaje al autoconocimiento tal como lo desarrollo desde mis libros, conferencias, talleres en donde además podrás realizar mis Cápsulas de Yoga como así también asesorarte en los distintos canales que tiene mi Comunidad donde me acompaña Paula Wassner, co-equiper de mis Talleres, Gabucha en el canal de Astrología y Cecilia Gómez nuestra maquilladora en el canal Beauty. Además contamos con un canal “Ingredientes” en donde te comparto material exclusivo para tu autoconocimiento y evolución. \n\n Te esperamos.",
			"expert": 1,
			"group_type": "membership",
			"commission": 20,
			"title": "Encontrarnos!",
			"color": "blue",
			"group_perks": [
				"Recibí consignas y reflexiones para profundizar y repensar nuestros vínculos.",
				"Leé y descubrí material inédito de mis libros.",
				"Involucrate el proceso creativo de mis charlas, talleres y encuentros.",
				"Se parte de todas mis conferencias.",
				"Acceso a mis cápsulas de Yoga.",
				"Descuentos y Beneficios en todas las actividades de la Comunidad.",
			],
			"profile_pic": {
				"id": 1,
				"name": "ariasuriburu.jpg",
				"alternativeText": "",
				"caption": "",
				"width": 413,
				"height": 413,
				"formats": {
					"thumbnail": {
						"name": "thumbnail_ariasuriburu.jpg",
						"hash": "thumbnail_ariasuriburu_b451cca582",
						"ext": ".jpg",
						"mime": "image/jpeg",
						"width": 156,
						"height": 156,
						"size": 5.37,
						"path": null,
						"url": "https://storage.googleapis.com/klouser-strapi-web-platform/thumbnail_ariasuriburu_b451cca582/thumbnail_ariasuriburu_b451cca582.jpg"
					}
				},
				"hash": "ariasuriburu_b451cca582",
				"ext": ".jpg",
				"mime": "image/jpeg",
				"size": 27.27,
				"url": "https://storage.googleapis.com/klouser-strapi-web-platform/ariasuriburu_b451cca582/ariasuriburu_b451cca582.jpg",
				"previewUrl": null,
				"provider": "google-cloud-storage",
				"provider_metadata": null,
				"created_at": "2021-02-15T03:19:22.000Z",
				"updated_at": "2021-02-15T03:19:22.000Z"
			},
			"cover_pic": {
				"id": 1,
				"name": "ariasuriburu.jpg",
				"alternativeText": "",
				"caption": "",
				"width": 413,
				"height": 413,
				"formats": {
					"thumbnail": {
						"name": "thumbnail_ariasuriburu.jpg",
						"hash": "thumbnail_ariasuriburu_b451cca582",
						"ext": ".jpg",
						"mime": "image/jpeg",
						"width": 156,
						"height": 156,
						"size": 5.37,
						"path": null,
						"url": "https://images.lalogold.com/files/c/klouser/experts/cover-84.jpg"
					}
				},
				"hash": "ariasuriburu_b451cca582",
				"ext": ".jpg",
				"mime": "image/jpeg",
				"size": 27.27,
				"url": "https://images.lalogold.com/files/c/klouser/experts/cover-84.jpg",
				"previewUrl": null,
				"provider": "google-cloud-storage",
				"provider_metadata": null,
				"created_at": "2021-02-15T03:19:22.000Z",
				"updated_at": "2021-02-15T03:19:22.000Z"
			},
			"price": {
				"plan": {
					"id": "klouser-apapachoastral",
					"name": "Klouser de Apapacho Astral",
					"description": "Acceso Ilimitado al Klouser de Lola Lugos\n\nKlouser Inc. está cobrando por Lola Lugos",
					"price": 2700,
					"period": 1,
					"period_unit": "month",
					"pricing_model": "flat_fee",
					"free_quantity": 0,
					"status": "active",
					"redirect_url": "https://klouser.com/postpayment-card?email={{customer.email}}",
					"enabled_in_hosted_pages": true,
					"enabled_in_portal": true,
					"addon_applicability": "all",
					"is_shippable": false,
					"updated_at": 1610135162,
					"giftable": false,
					"resource_version": 1610135162571,
					"object": "plan",
					"invoice_notes": "El beneficiario final de esa factura es Lola Lugo. Klouser Inc. está cobrando en el nombre de Lola Lugo. Si tienes alguna consulta, puedes comunicarte con nosotros enviando un email a billing&#64;klouser.com",
					"charge_model": "flat_fee",
					"taxable": true,
					"currency_code": "USD",
					"show_description_in_invoices": true,
					"show_description_in_quotes": false,
					"meta_data": {
						"plan_id": 129
					}
				},
				"coupon": {
					"id": "pre-launch-astrofilico",
					"name": "Pre-Lanzamiento",
					"invoice_name": "",
					"discount_type": "fixed_amount",
					"discount_amount": 300,
					"duration_type": "limited_period",
					"duration_month": 2,
					"valid_till": 1620000000000,
					"status": "active",
					"apply_discount_on": "not_applicable",
					"apply_on": "invoice_amount",
					"plan_constraint": "not_applicable",
					"addon_constraint": "not_applicable",
					"created_at": 1616611897,
					"updated_at": 1616611897,
					"resource_version": 1616611897310,
					"object": "coupon",
					"redemptions": 85,
					"currency_code": "USD"
				}
			}
		}
	)
}

export async function GetExpert(alias = '') {
	console.log(process.env.DB_EXPERTS);
	let url = process.env.DB_EXPERTS + '/' + alias;

	return await axios.get(url);
}