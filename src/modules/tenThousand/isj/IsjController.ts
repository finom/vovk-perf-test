import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isjs")
export default class IsjController {
  @operation({
    summary: "Get Isjs",
  })
  @get()
  static getIsjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isj",
  })
  @post("{id}")
  static createIsj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
