import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxjs")
export default class GxjController {
  @operation({
    summary: "Get Gxjs",
  })
  @get()
  static getGxjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxj",
  })
  @post("{id}")
  static createGxj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
