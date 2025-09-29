import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmgs")
export default class CmgController {
  @operation({
    summary: "Get Cmgs",
  })
  @get()
  static getCmgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmg",
  })
  @post("{id}")
  static createCmg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
