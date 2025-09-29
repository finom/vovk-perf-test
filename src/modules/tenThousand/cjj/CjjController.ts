import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjjs")
export default class CjjController {
  @operation({
    summary: "Get Cjjs",
  })
  @get()
  static getCjjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjj",
  })
  @post("{id}")
  static createCjj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
