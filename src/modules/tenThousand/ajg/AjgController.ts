import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajgs")
export default class AjgController {
  @operation({
    summary: "Get Ajgs",
  })
  @get()
  static getAjgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajg",
  })
  @post("{id}")
  static createAjg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
