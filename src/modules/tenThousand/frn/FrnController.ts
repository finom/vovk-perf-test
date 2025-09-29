import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frns")
export default class FrnController {
  @operation({
    summary: "Get Frns",
  })
  @get()
  static getFrns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frn",
  })
  @post("{id}")
  static createFrn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
