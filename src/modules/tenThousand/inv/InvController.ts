import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("invs")
export default class InvController {
  @operation({
    summary: "Get Invs",
  })
  @get()
  static getInvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Inv",
  })
  @post("{id}")
  static createInv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
