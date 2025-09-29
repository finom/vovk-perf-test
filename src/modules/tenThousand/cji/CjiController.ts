import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjis")
export default class CjiController {
  @operation({
    summary: "Get Cjis",
  })
  @get()
  static getCjis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cji",
  })
  @post("{id}")
  static createCji = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
