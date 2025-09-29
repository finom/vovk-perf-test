import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgws")
export default class LgwController {
  @operation({
    summary: "Get Lgws",
  })
  @get()
  static getLgws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgw",
  })
  @post("{id}")
  static createLgw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
