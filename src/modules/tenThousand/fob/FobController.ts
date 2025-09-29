import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fobs")
export default class FobController {
  @operation({
    summary: "Get Fobs",
  })
  @get()
  static getFobs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fob",
  })
  @post("{id}")
  static createFob = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
