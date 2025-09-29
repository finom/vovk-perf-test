import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixns")
export default class IxnController {
  @operation({
    summary: "Get Ixns",
  })
  @get()
  static getIxns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixn",
  })
  @post("{id}")
  static createIxn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
