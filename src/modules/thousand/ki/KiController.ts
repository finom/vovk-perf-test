import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kis")
export default class KiController {
  @operation({
    summary: "Get Kis",
  })
  @get()
  static getKis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ki",
  })
  @post("{id}")
  static createKi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
