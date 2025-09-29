import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anns")
export default class AnnController {
  @operation({
    summary: "Get Anns",
  })
  @get()
  static getAnns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ann",
  })
  @post("{id}")
  static createAnn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
