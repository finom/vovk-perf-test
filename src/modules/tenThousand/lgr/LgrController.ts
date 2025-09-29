import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgrs")
export default class LgrController {
  @operation({
    summary: "Get Lgrs",
  })
  @get()
  static getLgrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgr",
  })
  @post("{id}")
  static createLgr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
