import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfts")
export default class BftController {
  @operation({
    summary: "Get Bfts",
  })
  @get()
  static getBfts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bft",
  })
  @post("{id}")
  static createBft = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
