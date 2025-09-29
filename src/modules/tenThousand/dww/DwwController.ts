import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwws")
export default class DwwController {
  @operation({
    summary: "Get Dwws",
  })
  @get()
  static getDwws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dww",
  })
  @post("{id}")
  static createDww = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
