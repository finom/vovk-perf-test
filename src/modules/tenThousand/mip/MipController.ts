import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mips")
export default class MipController {
  @operation({
    summary: "Get Mips",
  })
  @get()
  static getMips = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mip",
  })
  @post("{id}")
  static createMip = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
