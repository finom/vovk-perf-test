import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjls")
export default class BjlController {
  @operation({
    summary: "Get Bjls",
  })
  @get()
  static getBjls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjl",
  })
  @post("{id}")
  static createBjl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
