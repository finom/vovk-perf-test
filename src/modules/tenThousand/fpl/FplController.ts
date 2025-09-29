import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpls")
export default class FplController {
  @operation({
    summary: "Get Fpls",
  })
  @get()
  static getFpls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpl",
  })
  @post("{id}")
  static createFpl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
