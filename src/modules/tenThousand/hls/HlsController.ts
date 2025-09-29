import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hls")
export default class HlsController {
  @operation({
    summary: "Get Hls",
  })
  @get()
  static getHls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hls",
  })
  @post("{id}")
  static createHls = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
