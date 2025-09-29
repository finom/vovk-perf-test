import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikbs")
export default class IkbController {
  @operation({
    summary: "Get Ikbs",
  })
  @get()
  static getIkbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikb",
  })
  @post("{id}")
  static createIkb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
