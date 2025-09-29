import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajbs")
export default class AjbController {
  @operation({
    summary: "Get Ajbs",
  })
  @get()
  static getAjbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajb",
  })
  @post("{id}")
  static createAjb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
