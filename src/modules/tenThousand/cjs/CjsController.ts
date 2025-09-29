import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjs")
export default class CjsController {
  @operation({
    summary: "Get Cjs",
  })
  @get()
  static getCjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjs",
  })
  @post("{id}")
  static createCjs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
