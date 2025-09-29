import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajvs")
export default class AjvController {
  @operation({
    summary: "Get Ajvs",
  })
  @get()
  static getAjvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajv",
  })
  @post("{id}")
  static createAjv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
