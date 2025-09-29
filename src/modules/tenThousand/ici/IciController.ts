import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icis")
export default class IciController {
  @operation({
    summary: "Get Icis",
  })
  @get()
  static getIcis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ici",
  })
  @post("{id}")
  static createIci = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
