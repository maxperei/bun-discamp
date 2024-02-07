import {App} from "./main";
import {renderToReadableStream} from "react-dom/server";

const buildsMatchers = new Map<string, () => Response>();

const init = async () => {
  const builds = await Bun.build({
    entrypoints: ['./hydrate.tsx'],
    target: "browser",
    splitting: true,
    minify: {
      identifiers: true,
      syntax: true,
      whitespace: true,
    },
  });
  for (const build of builds.outputs) {
    buildsMatchers.set(build.path.substring(1), () => new Response(build.stream(), {
      headers: {
        "Content-Type": build.type,
      },
    }));
  }
}

const serveBuild = (req: Request) => {
  const {pathname} = new URL(req.url);

  const buildFileRequest = buildsMatchers.get(pathname);

  if (buildFileRequest) {
    return buildFileRequest();
  }
}

await init();

const server = Bun.serve({
  port: 8080,
  async fetch(req) {
    const buildFileRequest = serveBuild(req);
    if (buildFileRequest) {
      return buildFileRequest;
    }
    const stream = await renderToReadableStream(<App/>, {
      bootstrapScripts: ['./hydrate.js']
    });
    return new Response(stream, {
      headers: {'Content-Type': 'text/html; charset=utf-8'}
    });
  },
});

console.log(`Listening on ${server.hostname}:${server.port}`);
