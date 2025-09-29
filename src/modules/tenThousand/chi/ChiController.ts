import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chis")
export default class ChiController {
  @operation({
    summary: "Get Chis",
  })
  @get()
  static getChis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chi",
  })
  @post("{id}")
  static createChi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
