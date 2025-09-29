import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfns")
export default class KfnController {
  @operation({
    summary: "Get Kfns",
  })
  @get()
  static getKfns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfn",
  })
  @post("{id}")
  static createKfn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
