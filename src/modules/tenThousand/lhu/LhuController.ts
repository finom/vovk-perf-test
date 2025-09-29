import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhus")
export default class LhuController {
  @operation({
    summary: "Get Lhus",
  })
  @get()
  static getLhus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhu",
  })
  @post("{id}")
  static createLhu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
