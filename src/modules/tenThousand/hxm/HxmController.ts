import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxms")
export default class HxmController {
  @operation({
    summary: "Get Hxms",
  })
  @get()
  static getHxms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxm",
  })
  @post("{id}")
  static createHxm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
