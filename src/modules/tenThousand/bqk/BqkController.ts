import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqks")
export default class BqkController {
  @operation({
    summary: "Get Bqks",
  })
  @get()
  static getBqks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqk",
  })
  @post("{id}")
  static createBqk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
