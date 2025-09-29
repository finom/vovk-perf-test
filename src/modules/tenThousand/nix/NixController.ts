import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nixes")
export default class NixController {
  @operation({
    summary: "Get Nixes",
  })
  @get()
  static getNixes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nix",
  })
  @post("{id}")
  static createNix = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
