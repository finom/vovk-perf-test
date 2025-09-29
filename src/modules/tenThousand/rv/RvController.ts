import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rvs")
export default class RvController {
  @operation({
    summary: "Get Rvs",
  })
  @get()
  static getRvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rv",
  })
  @post("{id}")
  static createRv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
