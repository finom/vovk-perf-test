import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhgs")
export default class FhgController {
  @operation({
    summary: "Get Fhgs",
  })
  @get()
  static getFhgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhg",
  })
  @post("{id}")
  static createFhg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
