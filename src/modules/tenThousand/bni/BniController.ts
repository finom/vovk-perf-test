import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnis")
export default class BniController {
  @operation({
    summary: "Get Bnis",
  })
  @get()
  static getBnis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bni",
  })
  @post("{id}")
  static createBni = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
