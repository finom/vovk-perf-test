import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwks")
export default class DwkController {
  @operation({
    summary: "Get Dwks",
  })
  @get()
  static getDwks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwk",
  })
  @post("{id}")
  static createDwk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
