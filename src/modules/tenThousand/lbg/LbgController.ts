import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbgs")
export default class LbgController {
  @operation({
    summary: "Get Lbgs",
  })
  @get()
  static getLbgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbg",
  })
  @post("{id}")
  static createLbg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
