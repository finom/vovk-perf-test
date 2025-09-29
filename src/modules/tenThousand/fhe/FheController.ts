import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhes")
export default class FheController {
  @operation({
    summary: "Get Fhes",
  })
  @get()
  static getFhes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhe",
  })
  @post("{id}")
  static createFhe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
