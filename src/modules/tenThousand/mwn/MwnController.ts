import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwns")
export default class MwnController {
  @operation({
    summary: "Get Mwns",
  })
  @get()
  static getMwns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwn",
  })
  @post("{id}")
  static createMwn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
