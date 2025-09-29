import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmds")
export default class MmdController {
  @operation({
    summary: "Get Mmds",
  })
  @get()
  static getMmds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmd",
  })
  @post("{id}")
  static createMmd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
