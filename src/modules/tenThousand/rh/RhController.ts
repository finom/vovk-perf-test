import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rhs")
export default class RhController {
  @operation({
    summary: "Get Rhs",
  })
  @get()
  static getRhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rh",
  })
  @post("{id}")
  static createRh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
