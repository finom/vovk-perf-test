import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltvs")
export default class LtvController {
  @operation({
    summary: "Get Ltvs",
  })
  @get()
  static getLtvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltv",
  })
  @post("{id}")
  static createLtv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
