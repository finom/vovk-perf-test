import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjns")
export default class BjnController {
  @operation({
    summary: "Get Bjns",
  })
  @get()
  static getBjns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjn",
  })
  @post("{id}")
  static createBjn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
