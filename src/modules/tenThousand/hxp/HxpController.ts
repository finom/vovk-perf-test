import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxps")
export default class HxpController {
  @operation({
    summary: "Get Hxps",
  })
  @get()
  static getHxps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxp",
  })
  @post("{id}")
  static createHxp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
