import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwjs")
export default class MwjController {
  @operation({
    summary: "Get Mwjs",
  })
  @get()
  static getMwjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwj",
  })
  @post("{id}")
  static createMwj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
