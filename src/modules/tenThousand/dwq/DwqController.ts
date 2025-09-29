import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwqs")
export default class DwqController {
  @operation({
    summary: "Get Dwqs",
  })
  @get()
  static getDwqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwq",
  })
  @post("{id}")
  static createDwq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
