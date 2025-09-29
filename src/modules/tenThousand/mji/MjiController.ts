import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjis")
export default class MjiController {
  @operation({
    summary: "Get Mjis",
  })
  @get()
  static getMjis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mji",
  })
  @post("{id}")
  static createMji = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
