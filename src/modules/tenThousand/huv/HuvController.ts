import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huvs")
export default class HuvController {
  @operation({
    summary: "Get Huvs",
  })
  @get()
  static getHuvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Huv",
  })
  @post("{id}")
  static createHuv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
