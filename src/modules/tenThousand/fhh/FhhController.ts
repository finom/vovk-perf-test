import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhhs")
export default class FhhController {
  @operation({
    summary: "Get Fhhs",
  })
  @get()
  static getFhhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhh",
  })
  @post("{id}")
  static createFhh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
