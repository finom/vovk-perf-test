import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cofs")
export default class CofController {
  @operation({
    summary: "Get Cofs",
  })
  @get()
  static getCofs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cof",
  })
  @post("{id}")
  static createCof = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
