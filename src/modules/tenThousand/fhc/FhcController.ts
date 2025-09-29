import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhcs")
export default class FhcController {
  @operation({
    summary: "Get Fhcs",
  })
  @get()
  static getFhcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhc",
  })
  @post("{id}")
  static createFhc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
