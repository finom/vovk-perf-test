import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwgs")
export default class DwgController {
  @operation({
    summary: "Get Dwgs",
  })
  @get()
  static getDwgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwg",
  })
  @post("{id}")
  static createDwg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
