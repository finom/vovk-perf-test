import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yts")
export default class YtController {
  @operation({
    summary: "Get Yts",
  })
  @get()
  static getYts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yt",
  })
  @post("{id}")
  static createYt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
