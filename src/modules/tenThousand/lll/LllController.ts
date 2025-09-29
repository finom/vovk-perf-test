import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llls")
export default class LllController {
  @operation({
    summary: "Get Llls",
  })
  @get()
  static getLlls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lll",
  })
  @post("{id}")
  static createLll = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
