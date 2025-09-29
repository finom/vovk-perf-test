import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itns")
export default class ItnController {
  @operation({
    summary: "Get Itns",
  })
  @get()
  static getItns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itn",
  })
  @post("{id}")
  static createItn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
