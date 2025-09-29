import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrds")
export default class MrdController {
  @operation({
    summary: "Get Mrds",
  })
  @get()
  static getMrds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrd",
  })
  @post("{id}")
  static createMrd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
