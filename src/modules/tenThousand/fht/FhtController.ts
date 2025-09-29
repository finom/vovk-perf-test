import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhts")
export default class FhtController {
  @operation({
    summary: "Get Fhts",
  })
  @get()
  static getFhts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fht",
  })
  @post("{id}")
  static createFht = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
