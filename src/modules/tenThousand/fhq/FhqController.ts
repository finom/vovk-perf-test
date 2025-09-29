import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhqs")
export default class FhqController {
  @operation({
    summary: "Get Fhqs",
  })
  @get()
  static getFhqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhq",
  })
  @post("{id}")
  static createFhq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
