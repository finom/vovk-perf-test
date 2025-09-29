import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hros")
export default class HroController {
  @operation({
    summary: "Get Hros",
  })
  @get()
  static getHros = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hro",
  })
  @post("{id}")
  static createHro = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
