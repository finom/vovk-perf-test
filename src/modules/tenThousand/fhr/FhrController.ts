import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhrs")
export default class FhrController {
  @operation({
    summary: "Get Fhrs",
  })
  @get()
  static getFhrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhr",
  })
  @post("{id}")
  static createFhr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
