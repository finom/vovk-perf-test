import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmds")
export default class NmdController {
  @operation({
    summary: "Get Nmds",
  })
  @get()
  static getNmds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmd",
  })
  @post("{id}")
  static createNmd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
