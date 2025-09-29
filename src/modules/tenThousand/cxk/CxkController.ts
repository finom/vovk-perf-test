import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxks")
export default class CxkController {
  @operation({
    summary: "Get Cxks",
  })
  @get()
  static getCxks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxk",
  })
  @post("{id}")
  static createCxk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
