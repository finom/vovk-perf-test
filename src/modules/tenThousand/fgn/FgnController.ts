import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgns")
export default class FgnController {
  @operation({
    summary: "Get Fgns",
  })
  @get()
  static getFgns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgn",
  })
  @post("{id}")
  static createFgn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
