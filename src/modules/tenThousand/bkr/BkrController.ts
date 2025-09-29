import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkrs")
export default class BkrController {
  @operation({
    summary: "Get Bkrs",
  })
  @get()
  static getBkrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkr",
  })
  @post("{id}")
  static createBkr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
