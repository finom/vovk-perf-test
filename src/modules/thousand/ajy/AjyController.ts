import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajies")
export default class AjyController {
  @operation({
    summary: "Get Ajies",
  })
  @get()
  static getAjies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajy",
  })
  @post("{id}")
  static createAjy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
