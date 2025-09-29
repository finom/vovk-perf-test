import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hls")
export default class HlController {
  @operation({
    summary: "Get Hls",
  })
  @get()
  static getHls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hl",
  })
  @post("{id}")
  static createHl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
