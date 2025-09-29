import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyhs")
export default class CyhController {
  @operation({
    summary: "Get Cyhs",
  })
  @get()
  static getCyhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyh",
  })
  @post("{id}")
  static createCyh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
