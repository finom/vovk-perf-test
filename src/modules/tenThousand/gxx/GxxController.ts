import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxxes")
export default class GxxController {
  @operation({
    summary: "Get Gxxes",
  })
  @get()
  static getGxxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxx",
  })
  @post("{id}")
  static createGxx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
