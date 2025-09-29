import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxns")
export default class LxnController {
  @operation({
    summary: "Get Lxns",
  })
  @get()
  static getLxns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxn",
  })
  @post("{id}")
  static createLxn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
