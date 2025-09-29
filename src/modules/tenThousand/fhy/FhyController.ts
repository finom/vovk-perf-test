import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhies")
export default class FhyController {
  @operation({
    summary: "Get Fhies",
  })
  @get()
  static getFhies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhy",
  })
  @post("{id}")
  static createFhy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
