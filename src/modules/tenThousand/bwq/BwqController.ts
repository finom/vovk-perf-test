import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwqs")
export default class BwqController {
  @operation({
    summary: "Get Bwqs",
  })
  @get()
  static getBwqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwq",
  })
  @post("{id}")
  static createBwq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
