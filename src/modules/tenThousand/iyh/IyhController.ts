import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyhs")
export default class IyhController {
  @operation({
    summary: "Get Iyhs",
  })
  @get()
  static getIyhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyh",
  })
  @post("{id}")
  static createIyh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
