import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwvs")
export default class DwvController {
  @operation({
    summary: "Get Dwvs",
  })
  @get()
  static getDwvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwv",
  })
  @post("{id}")
  static createDwv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
