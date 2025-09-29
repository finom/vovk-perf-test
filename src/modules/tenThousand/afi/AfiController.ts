import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afis")
export default class AfiController {
  @operation({
    summary: "Get Afis",
  })
  @get()
  static getAfis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afi",
  })
  @post("{id}")
  static createAfi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
