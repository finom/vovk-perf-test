import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwas")
export default class DwaController {
  @operation({
    summary: "Get Dwas",
  })
  @get()
  static getDwas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwa",
  })
  @post("{id}")
  static createDwa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
