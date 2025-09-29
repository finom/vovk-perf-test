import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbcs")
export default class LbcController {
  @operation({
    summary: "Get Lbcs",
  })
  @get()
  static getLbcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbc",
  })
  @post("{id}")
  static createLbc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
