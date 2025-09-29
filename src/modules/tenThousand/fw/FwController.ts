import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fws")
export default class FwController {
  @operation({
    summary: "Get Fws",
  })
  @get()
  static getFws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fw",
  })
  @post("{id}")
  static createFw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
