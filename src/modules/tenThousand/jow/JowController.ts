import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jows")
export default class JowController {
  @operation({
    summary: "Get Jows",
  })
  @get()
  static getJows = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jow",
  })
  @post("{id}")
  static createJow = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
