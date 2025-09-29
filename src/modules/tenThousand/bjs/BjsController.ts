import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjs")
export default class BjsController {
  @operation({
    summary: "Get Bjs",
  })
  @get()
  static getBjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjs",
  })
  @post("{id}")
  static createBjs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
