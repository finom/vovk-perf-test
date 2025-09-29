import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npgs")
export default class NpgController {
  @operation({
    summary: "Get Npgs",
  })
  @get()
  static getNpgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npg",
  })
  @post("{id}")
  static createNpg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
