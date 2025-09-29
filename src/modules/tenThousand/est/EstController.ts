import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ests")
export default class EstController {
  @operation({
    summary: "Get Ests",
  })
  @get()
  static getEsts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Est",
  })
  @post("{id}")
  static createEst = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
