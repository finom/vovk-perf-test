import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itjs")
export default class ItjController {
  @operation({
    summary: "Get Itjs",
  })
  @get()
  static getItjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itj",
  })
  @post("{id}")
  static createItj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
