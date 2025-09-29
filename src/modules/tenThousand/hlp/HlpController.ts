import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlps")
export default class HlpController {
  @operation({
    summary: "Get Hlps",
  })
  @get()
  static getHlps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlp",
  })
  @post("{id}")
  static createHlp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
