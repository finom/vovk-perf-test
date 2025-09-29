import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("auks")
export default class AukController {
  @operation({
    summary: "Get Auks",
  })
  @get()
  static getAuks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Auk",
  })
  @post("{id}")
  static createAuk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
