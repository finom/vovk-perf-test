import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxls")
export default class GxlController {
  @operation({
    summary: "Get Gxls",
  })
  @get()
  static getGxls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxl",
  })
  @post("{id}")
  static createGxl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
