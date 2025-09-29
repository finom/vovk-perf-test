import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjfs")
export default class BjfController {
  @operation({
    summary: "Get Bjfs",
  })
  @get()
  static getBjfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjf",
  })
  @post("{id}")
  static createBjf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
