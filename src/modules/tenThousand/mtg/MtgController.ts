import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtgs")
export default class MtgController {
  @operation({
    summary: "Get Mtgs",
  })
  @get()
  static getMtgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtg",
  })
  @post("{id}")
  static createMtg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
