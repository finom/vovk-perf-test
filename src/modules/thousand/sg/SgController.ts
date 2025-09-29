import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sgs")
export default class SgController {
  @operation({
    summary: "Get Sgs",
  })
  @get()
  static getSgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sg",
  })
  @post("{id}")
  static createSg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
