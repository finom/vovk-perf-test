import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxts")
export default class GxtController {
  @operation({
    summary: "Get Gxts",
  })
  @get()
  static getGxts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxt",
  })
  @post("{id}")
  static createGxt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
