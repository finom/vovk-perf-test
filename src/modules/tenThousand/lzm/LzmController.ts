import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzms")
export default class LzmController {
  @operation({
    summary: "Get Lzms",
  })
  @get()
  static getLzms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzm",
  })
  @post("{id}")
  static createLzm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
