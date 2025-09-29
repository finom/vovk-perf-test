import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhns")
export default class FhnController {
  @operation({
    summary: "Get Fhns",
  })
  @get()
  static getFhns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhn",
  })
  @post("{id}")
  static createFhn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
