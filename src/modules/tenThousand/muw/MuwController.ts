import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("muws")
export default class MuwController {
  @operation({
    summary: "Get Muws",
  })
  @get()
  static getMuws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Muw",
  })
  @post("{id}")
  static createMuw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
