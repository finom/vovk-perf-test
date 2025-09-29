import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilts")
export default class IltController {
  @operation({
    summary: "Get Ilts",
  })
  @get()
  static getIlts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilt",
  })
  @post("{id}")
  static createIlt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
