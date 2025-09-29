import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftzs")
export default class FtzController {
  @operation({
    summary: "Get Ftzs",
  })
  @get()
  static getFtzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftz",
  })
  @post("{id}")
  static createFtz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
