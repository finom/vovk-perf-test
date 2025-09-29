import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arks")
export default class ArkController {
  @operation({
    summary: "Get Arks",
  })
  @get()
  static getArks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ark",
  })
  @post("{id}")
  static createArk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
