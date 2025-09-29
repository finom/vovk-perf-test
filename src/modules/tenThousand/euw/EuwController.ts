import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("euws")
export default class EuwController {
  @operation({
    summary: "Get Euws",
  })
  @get()
  static getEuws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Euw",
  })
  @post("{id}")
  static createEuw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
