import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjqs")
export default class BjqController {
  @operation({
    summary: "Get Bjqs",
  })
  @get()
  static getBjqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjq",
  })
  @post("{id}")
  static createBjq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
