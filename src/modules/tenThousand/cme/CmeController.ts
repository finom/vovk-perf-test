import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmes")
export default class CmeController {
  @operation({
    summary: "Get Cmes",
  })
  @get()
  static getCmes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cme",
  })
  @post("{id}")
  static createCme = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
