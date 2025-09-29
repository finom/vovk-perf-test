import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pks")
export default class PkController {
  @operation({
    summary: "Get Pks",
  })
  @get()
  static getPks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pk",
  })
  @post("{id}")
  static createPk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
