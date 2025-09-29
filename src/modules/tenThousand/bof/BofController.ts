import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bofs")
export default class BofController {
  @operation({
    summary: "Get Bofs",
  })
  @get()
  static getBofs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bof",
  })
  @post("{id}")
  static createBof = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
