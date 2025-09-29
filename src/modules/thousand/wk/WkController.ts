import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wks")
export default class WkController {
  @operation({
    summary: "Get Wks",
  })
  @get()
  static getWks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wk",
  })
  @post("{id}")
  static createWk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
