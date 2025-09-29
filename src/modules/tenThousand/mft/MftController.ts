import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfts")
export default class MftController {
  @operation({
    summary: "Get Mfts",
  })
  @get()
  static getMfts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mft",
  })
  @post("{id}")
  static createMft = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
