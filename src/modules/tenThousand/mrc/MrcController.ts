import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrcs")
export default class MrcController {
  @operation({
    summary: "Get Mrcs",
  })
  @get()
  static getMrcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrc",
  })
  @post("{id}")
  static createMrc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
