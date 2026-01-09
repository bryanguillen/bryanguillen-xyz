import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const portfolioItems = await getCollection('portfolio');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: portfolioItems.map((item) => ({
			...item.data,
			link: `/portfolio/${item.id}/`,
		})),
	});
}
