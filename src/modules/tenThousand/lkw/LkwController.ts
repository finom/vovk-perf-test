import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkws")
export default class LkwController {
  @operation({
    summary: "Get Lkws",
  })
  @get()
  static getLkws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkw",
  })
  @post("{id}")
  static createLkw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
