import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("laes")
export default class LaeController {
  @operation({
    summary: "Get Laes",
  })
  @get()
  static getLaes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lae",
  })
  @post("{id}")
  static createLae = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
