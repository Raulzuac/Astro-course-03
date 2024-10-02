import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute =  (async({params, request,site})=>{

    const blogPosts = await getCollection('blog');


    return rss({
        // stylesheet: '/styles/rss.xsl',
        title: "Mi blog",
        description: "Un blog de prueba",
        site: site ?? '',
        items: blogPosts.map(({data,slug})=>({
            title: data.title,
            description: data.description,
            pubDate: data.date,
            link: `/posts/${slug}`,
        })),
        customData: `<language>es-es</language>`
    })
})