import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewks")
export default class EwkController {
  @operation({
    summary: "Get Ewks",
  })
  @get()
  static getEwks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewk",
  })
  @post("{id}")
  static createEwk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
