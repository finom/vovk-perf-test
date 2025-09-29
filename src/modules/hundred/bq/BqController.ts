import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqs")
export default class BqController {
  @operation({
    summary: "Get Bqs",
  })
  @get()
  static getBqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bq",
  })
  @post("{id}")
  static createBq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
