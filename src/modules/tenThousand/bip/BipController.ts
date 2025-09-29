import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bips")
export default class BipController {
  @operation({
    summary: "Get Bips",
  })
  @get()
  static getBips = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bip",
  })
  @post("{id}")
  static createBip = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
