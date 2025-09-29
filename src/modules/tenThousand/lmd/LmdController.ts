import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmds")
export default class LmdController {
  @operation({
    summary: "Get Lmds",
  })
  @get()
  static getLmds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmd",
  })
  @post("{id}")
  static createLmd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
