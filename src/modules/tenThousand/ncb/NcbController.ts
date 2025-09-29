import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncbs")
export default class NcbController {
  @operation({
    summary: "Get Ncbs",
  })
  @get()
  static getNcbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncb",
  })
  @post("{id}")
  static createNcb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
