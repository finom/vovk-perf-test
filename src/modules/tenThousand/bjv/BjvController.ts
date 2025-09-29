import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjvs")
export default class BjvController {
  @operation({
    summary: "Get Bjvs",
  })
  @get()
  static getBjvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjv",
  })
  @post("{id}")
  static createBjv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
