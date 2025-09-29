import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgos")
export default class HgoController {
  @operation({
    summary: "Get Hgos",
  })
  @get()
  static getHgos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgo",
  })
  @post("{id}")
  static createHgo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
