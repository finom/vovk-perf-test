import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhus")
export default class FhuController {
  @operation({
    summary: "Get Fhus",
  })
  @get()
  static getFhus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhu",
  })
  @post("{id}")
  static createFhu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
