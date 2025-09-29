import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwxes")
export default class DwxController {
  @operation({
    summary: "Get Dwxes",
  })
  @get()
  static getDwxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwx",
  })
  @post("{id}")
  static createDwx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
