import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxps")
export default class GxpController {
  @operation({
    summary: "Get Gxps",
  })
  @get()
  static getGxps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxp",
  })
  @post("{id}")
  static createGxp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
