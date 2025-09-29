import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwus")
export default class DwuController {
  @operation({
    summary: "Get Dwus",
  })
  @get()
  static getDwus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwu",
  })
  @post("{id}")
  static createDwu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
