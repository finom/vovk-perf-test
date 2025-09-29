import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlks")
export default class HlkController {
  @operation({
    summary: "Get Hlks",
  })
  @get()
  static getHlks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlk",
  })
  @post("{id}")
  static createHlk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
