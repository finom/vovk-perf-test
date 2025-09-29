import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wxes")
export default class WxController {
  @operation({
    summary: "Get Wxes",
  })
  @get()
  static getWxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wx",
  })
  @post("{id}")
  static createWx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
