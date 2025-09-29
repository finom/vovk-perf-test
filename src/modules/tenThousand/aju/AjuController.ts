import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajus")
export default class AjuController {
  @operation({
    summary: "Get Ajus",
  })
  @get()
  static getAjus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aju",
  })
  @post("{id}")
  static createAju = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
