import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnds")
export default class BndController {
  @operation({
    summary: "Get Bnds",
  })
  @get()
  static getBnds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnd",
  })
  @post("{id}")
  static createBnd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
