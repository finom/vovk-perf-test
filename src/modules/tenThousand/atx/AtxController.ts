import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atxes")
export default class AtxController {
  @operation({
    summary: "Get Atxes",
  })
  @get()
  static getAtxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atx",
  })
  @post("{id}")
  static createAtx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
