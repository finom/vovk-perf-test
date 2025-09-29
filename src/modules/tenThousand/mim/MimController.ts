import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mims")
export default class MimController {
  @operation({
    summary: "Get Mims",
  })
  @get()
  static getMims = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mim",
  })
  @post("{id}")
  static createMim = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
