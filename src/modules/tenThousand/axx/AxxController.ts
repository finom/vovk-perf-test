import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axxes")
export default class AxxController {
  @operation({
    summary: "Get Axxes",
  })
  @get()
  static getAxxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axx",
  })
  @post("{id}")
  static createAxx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
