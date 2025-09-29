import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmds")
export default class FmdController {
  @operation({
    summary: "Get Fmds",
  })
  @get()
  static getFmds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmd",
  })
  @post("{id}")
  static createFmd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
