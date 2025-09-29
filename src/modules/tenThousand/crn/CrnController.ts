import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crns")
export default class CrnController {
  @operation({
    summary: "Get Crns",
  })
  @get()
  static getCrns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crn",
  })
  @post("{id}")
  static createCrn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
