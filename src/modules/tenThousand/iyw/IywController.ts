import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyws")
export default class IywController {
  @operation({
    summary: "Get Iyws",
  })
  @get()
  static getIyws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyw",
  })
  @post("{id}")
  static createIyw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
