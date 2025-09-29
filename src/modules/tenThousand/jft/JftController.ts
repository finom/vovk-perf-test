import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfts")
export default class JftController {
  @operation({
    summary: "Get Jfts",
  })
  @get()
  static getJfts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jft",
  })
  @post("{id}")
  static createJft = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
