import * as fs from "fs/promises";
import * as path from "path";
import prettier from 'prettier';

(async () => {
  const cases = {
    one: 1,
    ten: 10,
    hundred: 100,
    thousand: 1_000,
    tenThousand: 10_000,
  };

  let result = `import { createVovkApp, operation, type KnownAny } from "vovk";
import { Bench } from 'tinybench';

function noopDecorator(arg?: KnownAny) {
  return function <T>(
    target: KnownAny,
    propertyKey: string,
    descriptor?: TypedPropertyDescriptor<T>
  ): KnownAny {
    return descriptor;
  };
}

function noopClassDecorator(message?: string) {
  return function <T extends { new(...args: KnownAny[]): {} }>(constructor: T) {
    return constructor;
  };
}

const bench = new Bench({ time: 100 });`;

  for (const [name, count] of Object.entries(cases)) {
    result += `

bench
    .add('Cold start for ${count} controllers', async () => {
    const { prefix, post, initSegment } = createVovkApp();
const controllers: Record<string, Function> = {};`;
    for (let i = 0; i < count; i++) {
      const controllerName = `${name.charAt(0).toUpperCase() + name.slice(1) + i}Controller`;
      result += `
@prefix("${name}/${i}")
class ${controllerName} {
  @operation({
    summary: "Create",
  })
  @post("{id}")
  static create = (_req: unknown, params: KnownAny) => {
    return null;
  };
}

controllers["${controllerName}"] = ${controllerName};
      `;
    }

    result += `
    initSegment({
      segmentName: "",
      emitSchema: true,
      controllers,
    });
});

bench
    .add('No-op decorators for ${count} classes', async () => {
const controllers: Record<string, Function> = {};`;
    for (let i = 0; i < count; i++) {
      const controllerName = `${name.charAt(0).toUpperCase() + name.slice(1) + i}Controller`;
      result += `
@noopClassDecorator()
class ${controllerName} {
  @noopDecorator({
    summary: "Create",
  })
  @noopDecorator("{id}")
  static create = (_req: unknown, params: KnownAny) => {
    return null;
  };
}
      `;
    }

    result += `
});
    `;
  }

  result += ` await bench.run();
console.table(bench.table());`;
  await fs.writeFile(path.join(`generated_coldStartPerf.ts`), await prettier.format(result, { parser: "typescript" }));
})();
