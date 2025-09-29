import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgns")
export default class MgnController {
  @operation({
    summary: "Get Mgns",
  })
  @get()
  static getMgns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgn",
  })
  @post("{id}")
  static createMgn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
