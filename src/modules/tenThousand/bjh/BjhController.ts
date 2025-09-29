import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjhs")
export default class BjhController {
  @operation({
    summary: "Get Bjhs",
  })
  @get()
  static getBjhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjh",
  })
  @post("{id}")
  static createBjh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
