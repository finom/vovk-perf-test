import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwes")
export default class LweController {
  @operation({
    summary: "Get Lwes",
  })
  @get()
  static getLwes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwe",
  })
  @post("{id}")
  static createLwe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
