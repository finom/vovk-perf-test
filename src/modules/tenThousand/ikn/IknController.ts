import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikns")
export default class IknController {
  @operation({
    summary: "Get Ikns",
  })
  @get()
  static getIkns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikn",
  })
  @post("{id}")
  static createIkn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
