import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ings")
export default class IngController {
  @operation({
    summary: "Get Ings",
  })
  @get()
  static getIngs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ing",
  })
  @post("{id}")
  static createIng = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
