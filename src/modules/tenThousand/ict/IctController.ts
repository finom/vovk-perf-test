import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icts")
export default class IctController {
  @operation({
    summary: "Get Icts",
  })
  @get()
  static getIcts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ict",
  })
  @post("{id}")
  static createIct = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
