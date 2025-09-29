import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btrs")
export default class BtrController {
  @operation({
    summary: "Get Btrs",
  })
  @get()
  static getBtrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btr",
  })
  @post("{id}")
  static createBtr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
