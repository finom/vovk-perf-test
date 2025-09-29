import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmgs")
export default class NmgController {
  @operation({
    summary: "Get Nmgs",
  })
  @get()
  static getNmgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmg",
  })
  @post("{id}")
  static createNmg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
