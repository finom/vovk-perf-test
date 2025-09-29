import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjjs")
export default class BjjController {
  @operation({
    summary: "Get Bjjs",
  })
  @get()
  static getBjjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjj",
  })
  @post("{id}")
  static createBjj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
