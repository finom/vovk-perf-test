import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlbs")
export default class HlbController {
  @operation({
    summary: "Get Hlbs",
  })
  @get()
  static getHlbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlb",
  })
  @post("{id}")
  static createHlb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
