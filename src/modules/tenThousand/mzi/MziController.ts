import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzis")
export default class MziController {
  @operation({
    summary: "Get Mzis",
  })
  @get()
  static getMzis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzi",
  })
  @post("{id}")
  static createMzi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
