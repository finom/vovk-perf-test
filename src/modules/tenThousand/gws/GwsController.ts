import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gws")
export default class GwsController {
  @operation({
    summary: "Get Gws",
  })
  @get()
  static getGws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gws",
  })
  @post("{id}")
  static createGws = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
