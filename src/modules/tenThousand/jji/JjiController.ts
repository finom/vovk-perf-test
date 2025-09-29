import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjis")
export default class JjiController {
  @operation({
    summary: "Get Jjis",
  })
  @get()
  static getJjis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jji",
  })
  @post("{id}")
  static createJji = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
