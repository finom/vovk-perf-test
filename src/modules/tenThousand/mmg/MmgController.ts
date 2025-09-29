import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmgs")
export default class MmgController {
  @operation({
    summary: "Get Mmgs",
  })
  @get()
  static getMmgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmg",
  })
  @post("{id}")
  static createMmg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
