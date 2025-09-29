import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhms")
export default class FhmController {
  @operation({
    summary: "Get Fhms",
  })
  @get()
  static getFhms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhm",
  })
  @post("{id}")
  static createFhm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
