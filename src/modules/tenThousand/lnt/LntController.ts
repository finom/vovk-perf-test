import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnts")
export default class LntController {
  @operation({
    summary: "Get Lnts",
  })
  @get()
  static getLnts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnt",
  })
  @post("{id}")
  static createLnt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
