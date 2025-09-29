import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjs")
export default class GjController {
  @operation({
    summary: "Get Gjs",
  })
  @get()
  static getGjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gj",
  })
  @post("{id}")
  static createGj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
