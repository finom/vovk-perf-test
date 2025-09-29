import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkws")
export default class FkwController {
  @operation({
    summary: "Get Fkws",
  })
  @get()
  static getFkws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkw",
  })
  @post("{id}")
  static createFkw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
