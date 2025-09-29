import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fks")
export default class FkController {
  @operation({
    summary: "Get Fks",
  })
  @get()
  static getFks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fk",
  })
  @post("{id}")
  static createFk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
