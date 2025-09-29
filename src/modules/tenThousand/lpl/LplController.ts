import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpls")
export default class LplController {
  @operation({
    summary: "Get Lpls",
  })
  @get()
  static getLpls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpl",
  })
  @post("{id}")
  static createLpl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
