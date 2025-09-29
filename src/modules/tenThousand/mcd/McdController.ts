import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcds")
export default class McdController {
  @operation({
    summary: "Get Mcds",
  })
  @get()
  static getMcds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcd",
  })
  @post("{id}")
  static createMcd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
