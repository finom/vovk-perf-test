import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efts")
export default class EftController {
  @operation({
    summary: "Get Efts",
  })
  @get()
  static getEfts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eft",
  })
  @post("{id}")
  static createEft = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
