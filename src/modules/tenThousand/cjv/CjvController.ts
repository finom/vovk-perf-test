import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjvs")
export default class CjvController {
  @operation({
    summary: "Get Cjvs",
  })
  @get()
  static getCjvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjv",
  })
  @post("{id}")
  static createCjv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
