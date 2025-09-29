import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("goks")
export default class GokController {
  @operation({
    summary: "Get Goks",
  })
  @get()
  static getGoks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gok",
  })
  @post("{id}")
  static createGok = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
