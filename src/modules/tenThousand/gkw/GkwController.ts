import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkws")
export default class GkwController {
  @operation({
    summary: "Get Gkws",
  })
  @get()
  static getGkws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkw",
  })
  @post("{id}")
  static createGkw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
