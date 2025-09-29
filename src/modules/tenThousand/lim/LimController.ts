import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lims")
export default class LimController {
  @operation({
    summary: "Get Lims",
  })
  @get()
  static getLims = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lim",
  })
  @post("{id}")
  static createLim = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
