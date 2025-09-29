import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgms")
export default class MgmController {
  @operation({
    summary: "Get Mgms",
  })
  @get()
  static getMgms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgm",
  })
  @post("{id}")
  static createMgm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
