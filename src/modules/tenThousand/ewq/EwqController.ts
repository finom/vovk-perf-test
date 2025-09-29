import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewqs")
export default class EwqController {
  @operation({
    summary: "Get Ewqs",
  })
  @get()
  static getEwqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewq",
  })
  @post("{id}")
  static createEwq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
