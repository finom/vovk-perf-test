import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("us")
export default class UController {
  @operation({
    summary: "Get US",
  })
  @get()
  static getUS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create U",
  })
  @post("{id}")
  static createU = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
