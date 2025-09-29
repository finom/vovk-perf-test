import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrds")
export default class LrdController {
  @operation({
    summary: "Get Lrds",
  })
  @get()
  static getLrds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrd",
  })
  @post("{id}")
  static createLrd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
