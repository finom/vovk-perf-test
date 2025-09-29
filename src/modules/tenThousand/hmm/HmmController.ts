import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmms")
export default class HmmController {
  @operation({
    summary: "Get Hmms",
  })
  @get()
  static getHmms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmm",
  })
  @post("{id}")
  static createHmm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
