import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrps")
export default class LrpController {
  @operation({
    summary: "Get Lrps",
  })
  @get()
  static getLrps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrp",
  })
  @post("{id}")
  static createLrp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
