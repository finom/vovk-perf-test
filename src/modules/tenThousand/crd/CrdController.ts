import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crds")
export default class CrdController {
  @operation({
    summary: "Get Crds",
  })
  @get()
  static getCrds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crd",
  })
  @post("{id}")
  static createCrd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
