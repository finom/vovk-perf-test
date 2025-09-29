import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjzs")
export default class CjzController {
  @operation({
    summary: "Get Cjzs",
  })
  @get()
  static getCjzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjz",
  })
  @post("{id}")
  static createCjz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
