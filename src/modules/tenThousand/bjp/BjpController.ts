import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjps")
export default class BjpController {
  @operation({
    summary: "Get Bjps",
  })
  @get()
  static getBjps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjp",
  })
  @post("{id}")
  static createBjp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
