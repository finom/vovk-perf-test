import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyps")
export default class DypController {
  @operation({
    summary: "Get Dyps",
  })
  @get()
  static getDyps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyp",
  })
  @post("{id}")
  static createDyp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
