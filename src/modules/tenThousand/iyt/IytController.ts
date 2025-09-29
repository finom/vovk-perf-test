import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyts")
export default class IytController {
  @operation({
    summary: "Get Iyts",
  })
  @get()
  static getIyts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyt",
  })
  @post("{id}")
  static createIyt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
