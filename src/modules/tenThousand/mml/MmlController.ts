import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmls")
export default class MmlController {
  @operation({
    summary: "Get Mmls",
  })
  @get()
  static getMmls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mml",
  })
  @post("{id}")
  static createMml = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
