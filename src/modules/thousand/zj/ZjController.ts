import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zjs")
export default class ZjController {
  @operation({
    summary: "Get Zjs",
  })
  @get()
  static getZjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zj",
  })
  @post("{id}")
  static createZj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
