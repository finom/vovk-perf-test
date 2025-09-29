import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwns")
export default class DwnController {
  @operation({
    summary: "Get Dwns",
  })
  @get()
  static getDwns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwn",
  })
  @post("{id}")
  static createDwn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
