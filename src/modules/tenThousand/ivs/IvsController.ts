import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivs")
export default class IvsController {
  @operation({
    summary: "Get Ivs",
  })
  @get()
  static getIvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivs",
  })
  @post("{id}")
  static createIvs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
