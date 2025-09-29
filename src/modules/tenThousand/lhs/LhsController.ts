import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhs")
export default class LhsController {
  @operation({
    summary: "Get Lhs",
  })
  @get()
  static getLhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhs",
  })
  @post("{id}")
  static createLhs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
