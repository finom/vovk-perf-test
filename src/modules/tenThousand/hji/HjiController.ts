import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjis")
export default class HjiController {
  @operation({
    summary: "Get Hjis",
  })
  @get()
  static getHjis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hji",
  })
  @post("{id}")
  static createHji = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
