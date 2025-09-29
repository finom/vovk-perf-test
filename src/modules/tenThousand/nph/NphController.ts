import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nphs")
export default class NphController {
  @operation({
    summary: "Get Nphs",
  })
  @get()
  static getNphs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nph",
  })
  @post("{id}")
  static createNph = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
