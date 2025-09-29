import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqs")
export default class BqsController {
  @operation({
    summary: "Get Bqs",
  })
  @get()
  static getBqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqs",
  })
  @post("{id}")
  static createBqs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
