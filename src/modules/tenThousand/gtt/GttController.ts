import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtts")
export default class GttController {
  @operation({
    summary: "Get Gtts",
  })
  @get()
  static getGtts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtt",
  })
  @post("{id}")
  static createGtt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
