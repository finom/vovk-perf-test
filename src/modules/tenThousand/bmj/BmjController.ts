import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmjs")
export default class BmjController {
  @operation({
    summary: "Get Bmjs",
  })
  @get()
  static getBmjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmj",
  })
  @post("{id}")
  static createBmj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
