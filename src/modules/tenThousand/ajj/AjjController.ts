import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajjs")
export default class AjjController {
  @operation({
    summary: "Get Ajjs",
  })
  @get()
  static getAjjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajj",
  })
  @post("{id}")
  static createAjj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
