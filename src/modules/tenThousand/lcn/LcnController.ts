import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcns")
export default class LcnController {
  @operation({
    summary: "Get Lcns",
  })
  @get()
  static getLcns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcn",
  })
  @post("{id}")
  static createLcn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
