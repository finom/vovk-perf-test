import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggqs")
export default class GgqController {
  @operation({
    summary: "Get Ggqs",
  })
  @get()
  static getGgqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggq",
  })
  @post("{id}")
  static createGgq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
