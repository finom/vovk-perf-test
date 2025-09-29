import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbjs")
export default class GbjController {
  @operation({
    summary: "Get Gbjs",
  })
  @get()
  static getGbjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbj",
  })
  @post("{id}")
  static createGbj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
