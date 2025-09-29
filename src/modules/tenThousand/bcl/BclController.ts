import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcls")
export default class BclController {
  @operation({
    summary: "Get Bcls",
  })
  @get()
  static getBcls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcl",
  })
  @post("{id}")
  static createBcl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
