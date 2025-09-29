import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhds")
export default class LhdController {
  @operation({
    summary: "Get Lhds",
  })
  @get()
  static getLhds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhd",
  })
  @post("{id}")
  static createLhd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
