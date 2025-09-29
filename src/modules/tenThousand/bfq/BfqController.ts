import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfqs")
export default class BfqController {
  @operation({
    summary: "Get Bfqs",
  })
  @get()
  static getBfqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfq",
  })
  @post("{id}")
  static createBfq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
