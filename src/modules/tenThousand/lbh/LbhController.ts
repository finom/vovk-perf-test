import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbhs")
export default class LbhController {
  @operation({
    summary: "Get Lbhs",
  })
  @get()
  static getLbhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbh",
  })
  @post("{id}")
  static createLbh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
