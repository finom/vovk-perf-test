import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhds")
export default class MhdController {
  @operation({
    summary: "Get Mhds",
  })
  @get()
  static getMhds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhd",
  })
  @post("{id}")
  static createMhd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
