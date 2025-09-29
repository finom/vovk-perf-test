import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwks")
export default class GwkController {
  @operation({
    summary: "Get Gwks",
  })
  @get()
  static getGwks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwk",
  })
  @post("{id}")
  static createGwk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
