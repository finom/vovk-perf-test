import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajms")
export default class AjmController {
  @operation({
    summary: "Get Ajms",
  })
  @get()
  static getAjms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajm",
  })
  @post("{id}")
  static createAjm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
