import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fshes")
export default class FshController {
  @operation({
    summary: "Get Fshes",
  })
  @get()
  static getFshes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsh",
  })
  @post("{id}")
  static createFsh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
