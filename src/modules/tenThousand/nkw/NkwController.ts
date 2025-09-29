import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkws")
export default class NkwController {
  @operation({
    summary: "Get Nkws",
  })
  @get()
  static getNkws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkw",
  })
  @post("{id}")
  static createNkw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
