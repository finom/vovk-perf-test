import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhps")
export default class FhpController {
  @operation({
    summary: "Get Fhps",
  })
  @get()
  static getFhps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhp",
  })
  @post("{id}")
  static createFhp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
