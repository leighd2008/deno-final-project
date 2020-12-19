import { Application } from "https://deno.land/x/oak@v6.4.0/mod.ts";

const app = new Application();
const PORT = 8000;

app.use((ctx) => {
  ctx.response.body = 'NASA Mission Control API'
});

if (import.meta.main) {
  await app.listen({
    port: PORT,
  });
}
