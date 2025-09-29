import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlrs")
export default class HlrController {
  @operation({
    summary: "Get Hlrs",
  })
  @get()
  static getHlrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlr",
  })
  @post("{id}")
  static createHlr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
