import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwjs")
export default class IwjController {
  @operation({
    summary: "Get Iwjs",
  })
  @get()
  static getIwjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwj",
  })
  @post("{id}")
  static createIwj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
