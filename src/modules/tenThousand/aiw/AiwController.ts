import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aiws")
export default class AiwController {
  @operation({
    summary: "Get Aiws",
  })
  @get()
  static getAiws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aiw",
  })
  @post("{id}")
  static createAiw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
