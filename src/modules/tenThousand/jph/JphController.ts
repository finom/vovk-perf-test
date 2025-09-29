import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jphs")
export default class JphController {
  @operation({
    summary: "Get Jphs",
  })
  @get()
  static getJphs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jph",
  })
  @post("{id}")
  static createJph = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
