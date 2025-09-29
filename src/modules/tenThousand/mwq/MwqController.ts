import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwqs")
export default class MwqController {
  @operation({
    summary: "Get Mwqs",
  })
  @get()
  static getMwqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwq",
  })
  @post("{id}")
  static createMwq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
