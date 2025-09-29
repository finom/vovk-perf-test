import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxas")
export default class GxaController {
  @operation({
    summary: "Get Gxas",
  })
  @get()
  static getGxas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxa",
  })
  @post("{id}")
  static createGxa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
