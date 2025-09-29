import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfts")
export default class KftController {
  @operation({
    summary: "Get Kfts",
  })
  @get()
  static getKfts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kft",
  })
  @post("{id}")
  static createKft = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
