import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikqs")
export default class IkqController {
  @operation({
    summary: "Get Ikqs",
  })
  @get()
  static getIkqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikq",
  })
  @post("{id}")
  static createIkq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
