import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cses")
export default class CseController {
  @operation({
    summary: "Get Cses",
  })
  @get()
  static getCses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cse",
  })
  @post("{id}")
  static createCse = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
