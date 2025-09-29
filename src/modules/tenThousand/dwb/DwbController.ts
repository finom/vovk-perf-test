import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwbs")
export default class DwbController {
  @operation({
    summary: "Get Dwbs",
  })
  @get()
  static getDwbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwb",
  })
  @post("{id}")
  static createDwb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
