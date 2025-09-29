import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrws")
export default class LrwController {
  @operation({
    summary: "Get Lrws",
  })
  @get()
  static getLrws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrw",
  })
  @post("{id}")
  static createLrw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
