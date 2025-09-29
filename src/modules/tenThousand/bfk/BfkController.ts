import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfks")
export default class BfkController {
  @operation({
    summary: "Get Bfks",
  })
  @get()
  static getBfks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfk",
  })
  @post("{id}")
  static createBfk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
