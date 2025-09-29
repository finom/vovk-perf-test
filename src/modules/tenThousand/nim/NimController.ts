import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nims")
export default class NimController {
  @operation({
    summary: "Get Nims",
  })
  @get()
  static getNims = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nim",
  })
  @post("{id}")
  static createNim = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
