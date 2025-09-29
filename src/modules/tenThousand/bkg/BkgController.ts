import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkgs")
export default class BkgController {
  @operation({
    summary: "Get Bkgs",
  })
  @get()
  static getBkgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkg",
  })
  @post("{id}")
  static createBkg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
