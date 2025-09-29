import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gs")
export default class GController {
  @operation({
    summary: "Get GS",
  })
  @get()
  static getGS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create G",
  })
  @post("{id}")
  static createG = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
