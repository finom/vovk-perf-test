import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwgs")
export default class IwgController {
  @operation({
    summary: "Get Iwgs",
  })
  @get()
  static getIwgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwg",
  })
  @post("{id}")
  static createIwg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
