import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyjs")
export default class IyjController {
  @operation({
    summary: "Get Iyjs",
  })
  @get()
  static getIyjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyj",
  })
  @post("{id}")
  static createIyj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
