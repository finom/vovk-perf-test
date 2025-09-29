import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhks")
export default class FhkController {
  @operation({
    summary: "Get Fhks",
  })
  @get()
  static getFhks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhk",
  })
  @post("{id}")
  static createFhk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
