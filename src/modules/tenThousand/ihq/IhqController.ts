import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihqs")
export default class IhqController {
  @operation({
    summary: "Get Ihqs",
  })
  @get()
  static getIhqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihq",
  })
  @post("{id}")
  static createIhq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
