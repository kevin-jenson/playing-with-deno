import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

let idSet: Array<number> = [];
for (let i = 0; i < 100; i++) {
	idSet.push(i);
}

const router = new Router();
router.get('/', ctx => {
	ctx.response.body = 'Hello World!';
}).get('/ids', ctx => {
	ctx.response.body = idSet;
}).get('/ids/:id', ctx => {
	ctx.response.body = idSet.find(id => ctx.params?.id)
})

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

try {
	const PORT = 5000;
	console.log(`Listening on port 🚀 ${PORT} 🚀`);
	await app.listen({ port: PORT });
} catch(error) {
	console.log(`Uh Oh something went wrong!`);
}
