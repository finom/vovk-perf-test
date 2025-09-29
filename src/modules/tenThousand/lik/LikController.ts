import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("liks")
export default class LikController {
  @operation({
    summary: "Get Liks",
  })
  @get()
  static getLiks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lik",
  })
  @post("{id}")
  static createLik = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
