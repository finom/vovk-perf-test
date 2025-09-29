import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayds")
export default class AydController {
  @operation({
    summary: "Get Ayds",
  })
  @get()
  static getAyds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayd",
  })
  @post("{id}")
  static createAyd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
