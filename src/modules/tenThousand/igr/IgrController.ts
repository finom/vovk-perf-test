import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igrs")
export default class IgrController {
  @operation({
    summary: "Get Igrs",
  })
  @get()
  static getIgrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igr",
  })
  @post("{id}")
  static createIgr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
