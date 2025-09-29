import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmrs")
export default class HmrController {
  @operation({
    summary: "Get Hmrs",
  })
  @get()
  static getHmrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmr",
  })
  @post("{id}")
  static createHmr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
