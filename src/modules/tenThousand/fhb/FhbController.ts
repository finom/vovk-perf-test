import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhbs")
export default class FhbController {
  @operation({
    summary: "Get Fhbs",
  })
  @get()
  static getFhbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhb",
  })
  @post("{id}")
  static createFhb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
