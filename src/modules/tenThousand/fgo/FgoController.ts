import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgos")
export default class FgoController {
  @operation({
    summary: "Get Fgos",
  })
  @get()
  static getFgos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgo",
  })
  @post("{id}")
  static createFgo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
