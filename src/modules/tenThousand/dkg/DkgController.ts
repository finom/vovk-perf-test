import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkgs")
export default class DkgController {
  @operation({
    summary: "Get Dkgs",
  })
  @get()
  static getDkgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkg",
  })
  @post("{id}")
  static createDkg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
