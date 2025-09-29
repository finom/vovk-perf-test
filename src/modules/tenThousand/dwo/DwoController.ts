import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwos")
export default class DwoController {
  @operation({
    summary: "Get Dwos",
  })
  @get()
  static getDwos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwo",
  })
  @post("{id}")
  static createDwo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
