import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajks")
export default class AjkController {
  @operation({
    summary: "Get Ajks",
  })
  @get()
  static getAjks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajk",
  })
  @post("{id}")
  static createAjk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
