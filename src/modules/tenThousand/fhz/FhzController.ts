import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhzs")
export default class FhzController {
  @operation({
    summary: "Get Fhzs",
  })
  @get()
  static getFhzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhz",
  })
  @post("{id}")
  static createFhz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
