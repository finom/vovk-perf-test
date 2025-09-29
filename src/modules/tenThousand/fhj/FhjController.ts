import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhjs")
export default class FhjController {
  @operation({
    summary: "Get Fhjs",
  })
  @get()
  static getFhjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhj",
  })
  @post("{id}")
  static createFhj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
