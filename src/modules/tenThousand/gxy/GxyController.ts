import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxies")
export default class GxyController {
  @operation({
    summary: "Get Gxies",
  })
  @get()
  static getGxies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxy",
  })
  @post("{id}")
  static createGxy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
