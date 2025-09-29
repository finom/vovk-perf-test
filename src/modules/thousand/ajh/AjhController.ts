import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajhs")
export default class AjhController {
  @operation({
    summary: "Get Ajhs",
  })
  @get()
  static getAjhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajh",
  })
  @post("{id}")
  static createAjh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
