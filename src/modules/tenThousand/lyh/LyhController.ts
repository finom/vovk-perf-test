import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyhs")
export default class LyhController {
  @operation({
    summary: "Get Lyhs",
  })
  @get()
  static getLyhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyh",
  })
  @post("{id}")
  static createLyh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
