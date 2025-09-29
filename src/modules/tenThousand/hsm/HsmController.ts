import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsms")
export default class HsmController {
  @operation({
    summary: "Get Hsms",
  })
  @get()
  static getHsms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsm",
  })
  @post("{id}")
  static createHsm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
