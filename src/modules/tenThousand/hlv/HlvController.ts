import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlvs")
export default class HlvController {
  @operation({
    summary: "Get Hlvs",
  })
  @get()
  static getHlvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlv",
  })
  @post("{id}")
  static createHlv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
