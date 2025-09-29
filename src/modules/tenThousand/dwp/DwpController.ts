import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwps")
export default class DwpController {
  @operation({
    summary: "Get Dwps",
  })
  @get()
  static getDwps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwp",
  })
  @post("{id}")
  static createDwp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
