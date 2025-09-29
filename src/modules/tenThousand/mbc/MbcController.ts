import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbcs")
export default class MbcController {
  @operation({
    summary: "Get Mbcs",
  })
  @get()
  static getMbcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbc",
  })
  @post("{id}")
  static createMbc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
