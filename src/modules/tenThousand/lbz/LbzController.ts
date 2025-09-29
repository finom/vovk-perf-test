import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbzs")
export default class LbzController {
  @operation({
    summary: "Get Lbzs",
  })
  @get()
  static getLbzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbz",
  })
  @post("{id}")
  static createLbz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
