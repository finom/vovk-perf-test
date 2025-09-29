import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csses")
export default class CssController {
  @operation({
    summary: "Get Csses",
  })
  @get()
  static getCsses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Css",
  })
  @post("{id}")
  static createCss = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
