import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjks")
export default class CjkController {
  @operation({
    summary: "Get Cjks",
  })
  @get()
  static getCjks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjk",
  })
  @post("{id}")
  static createCjk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
