import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lses")
export default class LseController {
  @operation({
    summary: "Get Lses",
  })
  @get()
  static getLses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lse",
  })
  @post("{id}")
  static createLse = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
