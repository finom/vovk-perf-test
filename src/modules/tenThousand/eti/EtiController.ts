import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etis")
export default class EtiController {
  @operation({
    summary: "Get Etis",
  })
  @get()
  static getEtis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eti",
  })
  @post("{id}")
  static createEti = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
