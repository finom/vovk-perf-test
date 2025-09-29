import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpgs")
export default class FpgController {
  @operation({
    summary: "Get Fpgs",
  })
  @get()
  static getFpgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpg",
  })
  @post("{id}")
  static createFpg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
