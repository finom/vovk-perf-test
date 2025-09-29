import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dybs")
export default class DybController {
  @operation({
    summary: "Get Dybs",
  })
  @get()
  static getDybs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyb",
  })
  @post("{id}")
  static createDyb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
