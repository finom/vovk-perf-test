import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgos")
export default class BgoController {
  @operation({
    summary: "Get Bgos",
  })
  @get()
  static getBgos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgo",
  })
  @post("{id}")
  static createBgo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
