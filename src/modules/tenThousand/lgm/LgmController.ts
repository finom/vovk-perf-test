import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgms")
export default class LgmController {
  @operation({
    summary: "Get Lgms",
  })
  @get()
  static getLgms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgm",
  })
  @post("{id}")
  static createLgm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
