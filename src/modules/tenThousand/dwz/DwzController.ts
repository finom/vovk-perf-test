import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwzs")
export default class DwzController {
  @operation({
    summary: "Get Dwzs",
  })
  @get()
  static getDwzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwz",
  })
  @post("{id}")
  static createDwz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
