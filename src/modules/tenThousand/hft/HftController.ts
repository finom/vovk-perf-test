import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfts")
export default class HftController {
  @operation({
    summary: "Get Hfts",
  })
  @get()
  static getHfts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hft",
  })
  @post("{id}")
  static createHft = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
