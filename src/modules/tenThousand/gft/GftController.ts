import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfts")
export default class GftController {
  @operation({
    summary: "Get Gfts",
  })
  @get()
  static getGfts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gft",
  })
  @post("{id}")
  static createGft = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
