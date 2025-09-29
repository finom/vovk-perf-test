import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqls")
export default class NqlController {
  @operation({
    summary: "Get Nqls",
  })
  @get()
  static getNqls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nql",
  })
  @post("{id}")
  static createNql = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
