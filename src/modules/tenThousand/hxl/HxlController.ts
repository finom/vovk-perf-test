import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxls")
export default class HxlController {
  @operation({
    summary: "Get Hxls",
  })
  @get()
  static getHxls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxl",
  })
  @post("{id}")
  static createHxl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
