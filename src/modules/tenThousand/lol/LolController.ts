import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lols")
export default class LolController {
  @operation({
    summary: "Get Lols",
  })
  @get()
  static getLols = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lol",
  })
  @post("{id}")
  static createLol = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
