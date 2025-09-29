import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ks")
export default class KController {
  @operation({
    summary: "Get KS",
  })
  @get()
  static getKS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create K",
  })
  @post("{id}")
  static createK = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
