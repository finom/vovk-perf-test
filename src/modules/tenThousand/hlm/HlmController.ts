import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlms")
export default class HlmController {
  @operation({
    summary: "Get Hlms",
  })
  @get()
  static getHlms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlm",
  })
  @post("{id}")
  static createHlm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
