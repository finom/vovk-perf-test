import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilxes")
export default class IlxController {
  @operation({
    summary: "Get Ilxes",
  })
  @get()
  static getIlxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilx",
  })
  @post("{id}")
  static createIlx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
