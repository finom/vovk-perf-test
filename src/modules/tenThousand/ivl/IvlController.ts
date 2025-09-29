import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivls")
export default class IvlController {
  @operation({
    summary: "Get Ivls",
  })
  @get()
  static getIvls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivl",
  })
  @post("{id}")
  static createIvl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
