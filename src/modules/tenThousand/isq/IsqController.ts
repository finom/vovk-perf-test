import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isqs")
export default class IsqController {
  @operation({
    summary: "Get Isqs",
  })
  @get()
  static getIsqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isq",
  })
  @post("{id}")
  static createIsq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
