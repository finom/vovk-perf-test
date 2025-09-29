import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guws")
export default class GuwController {
  @operation({
    summary: "Get Guws",
  })
  @get()
  static getGuws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Guw",
  })
  @post("{id}")
  static createGuw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
