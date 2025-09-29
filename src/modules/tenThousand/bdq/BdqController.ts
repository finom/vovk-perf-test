import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdqs")
export default class BdqController {
  @operation({
    summary: "Get Bdqs",
  })
  @get()
  static getBdqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdq",
  })
  @post("{id}")
  static createBdq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
