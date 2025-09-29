import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhws")
export default class FhwController {
  @operation({
    summary: "Get Fhws",
  })
  @get()
  static getFhws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhw",
  })
  @post("{id}")
  static createFhw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
