import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhvs")
export default class FhvController {
  @operation({
    summary: "Get Fhvs",
  })
  @get()
  static getFhvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhv",
  })
  @post("{id}")
  static createFhv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
