import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fws")
export default class FwsController {
  @operation({
    summary: "Get Fws",
  })
  @get()
  static getFws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fws",
  })
  @post("{id}")
  static createFws = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
