import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aks")
export default class AkController {
  @operation({
    summary: "Get Aks",
  })
  @get()
  static getAks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ak",
  })
  @post("{id}")
  static createAk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
