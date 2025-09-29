import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mivs")
export default class MivController {
  @operation({
    summary: "Get Mivs",
  })
  @get()
  static getMivs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Miv",
  })
  @post("{id}")
  static createMiv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
