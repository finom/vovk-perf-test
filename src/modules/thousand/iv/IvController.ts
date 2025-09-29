import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivs")
export default class IvController {
  @operation({
    summary: "Get Ivs",
  })
  @get()
  static getIvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iv",
  })
  @post("{id}")
  static createIv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
