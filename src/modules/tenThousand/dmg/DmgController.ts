import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmgs")
export default class DmgController {
  @operation({
    summary: "Get Dmgs",
  })
  @get()
  static getDmgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmg",
  })
  @post("{id}")
  static createDmg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
