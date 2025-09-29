import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgvs")
export default class FgvController {
  @operation({
    summary: "Get Fgvs",
  })
  @get()
  static getFgvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgv",
  })
  @post("{id}")
  static createFgv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
