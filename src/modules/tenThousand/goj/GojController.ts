import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gojs")
export default class GojController {
  @operation({
    summary: "Get Gojs",
  })
  @get()
  static getGojs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Goj",
  })
  @post("{id}")
  static createGoj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
