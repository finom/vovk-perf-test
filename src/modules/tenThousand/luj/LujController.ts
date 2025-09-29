import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lujs")
export default class LujController {
  @operation({
    summary: "Get Lujs",
  })
  @get()
  static getLujs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Luj",
  })
  @post("{id}")
  static createLuj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
