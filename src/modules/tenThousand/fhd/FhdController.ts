import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhds")
export default class FhdController {
  @operation({
    summary: "Get Fhds",
  })
  @get()
  static getFhds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fhd",
  })
  @post("{id}")
  static createFhd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
