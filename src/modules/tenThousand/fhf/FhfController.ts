import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhfs")
export default class FhfController {
  @operation({
    summary: "Get Fhfs",
  })
  @get()
  static getFhfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhf",
  })
  @post("{id}")
  static createFhf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
