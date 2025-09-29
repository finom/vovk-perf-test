import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsqs")
export default class GsqController {
  @operation({
    summary: "Get Gsqs",
  })
  @get()
  static getGsqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsq",
  })
  @post("{id}")
  static createGsq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
