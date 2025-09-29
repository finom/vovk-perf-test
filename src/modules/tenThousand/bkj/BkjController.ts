import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkjs")
export default class BkjController {
  @operation({
    summary: "Get Bkjs",
  })
  @get()
  static getBkjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkj",
  })
  @post("{id}")
  static createBkj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
