import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjzs")
export default class BjzController {
  @operation({
    summary: "Get Bjzs",
  })
  @get()
  static getBjzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjz",
  })
  @post("{id}")
  static createBjz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
