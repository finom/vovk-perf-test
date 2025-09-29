import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxns")
export default class KxnController {
  @operation({
    summary: "Get Kxns",
  })
  @get()
  static getKxns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxn",
  })
  @post("{id}")
  static createKxn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
