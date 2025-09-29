import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npks")
export default class NpkController {
  @operation({
    summary: "Get Npks",
  })
  @get()
  static getNpks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npk",
  })
  @post("{id}")
  static createNpk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
