import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhis")
export default class FhiController {
  @operation({
    summary: "Get Fhis",
  })
  @get()
  static getFhis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhi",
  })
  @post("{id}")
  static createFhi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
